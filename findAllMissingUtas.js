const knex = require("knex");
const { MongoClient, ObjectID } = require("mongodb");
require("dotenv").config({ path: __dirname + "/.env" });

const getRedshift = () =>
  knex({
    client: "redshift",
    searchPath: [process.env.REDSHIFT_DB_SCHEMA || "edulastic"],
    connection: {
      host: process.env.REDSHIFT_DB_HOST || "localhost",
      user: process.env.REDSHIFT_DB_USER || "dbuser",
      password: process.env.REDSHIFT_DB_PASSWORD,
      database: process.env.REDSHIFT_DB_NAME || "edulastic",
      port: process.env.REDSHIFT_DB_PORT || 5439,
    },
    pool: { min: 1, max: 2 },
    acquireConnectionTimeout: 30000,
  });

const getMongoClient = async () =>
  MongoClient.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const createMap = (map, items, key) => {
  for (const item of items) {
    map.set(`${item[key]}`, item[key]);
  }
};

// GCPS - District 2023-24
const DISTRICT_ID = "635918f1559a0f00082f0694";
const TERM_ID = "6362a3834091640008776135";
// const TEST_ID = '659d8fb09972ca0008a3729a';
const TEST_IDS = [
  "6529936f7ca2250008c74555",
  "65299401a13c020008bce403",
  "65299300272ce3000846b2e6",
  "65299261e333300008f3b947",
  "652ead5d64b28b00088a199c",
  "652eaf4e5de49e0008e46c61",
  "652eb05f8de6d600088a3f6a",
  "652eb15776bf760008f46d29",
  "652eb1e1bdc86600082f9946",
  "652eb331c41b7100080363fa",
  "652edcfa24c0d00008797d85",
  "653681275adca40008959cbc",
  "65493f094b385f0008eb3831",
  "654dbd9d17fc480008b97f13",
  "655b8618d7342c0008ce15b3",
  "65671a74882cdd00084dbdb7",
  "65671b9a9fa1e50008126063",
];

// from last 24 hours
// const FROM_DATE = 1710288000000;

(async () => {
  let redshift;
  let client;
  try {
    client = await getMongoClient();
    redshift = getRedshift();
    console.log("Connected to DBs");
    const db = client.db();
    const mongoUTAs = [];
    let counter = 0;
    await db
      .collection("VUserTestActivities")
      .find(
        {
          status: { $in: [1, 2] },
          termId: new ObjectID(TERM_ID),
          districtId: new ObjectID(DISTRICT_ID),
          reportKey: { $in: TEST_IDS.map((t) => ObjectID(t))},
          archived: { $ne: true },
          // startDate: { $gt: FROM_DATE },
        },
        {
          _id: 1,
        }
      )
      .forEach((doc) => {
        if (counter % 1000 === 0) {
          console.log(counter);
        }
        counter++;
        mongoUTAs.push(doc._id);
      });
    console.log("Total Mongo UTAs", mongoUTAs.length);

    const rsUtas = (
      await redshift.raw(`
      SELECT
        test_activity_id
      FROM
        ${process.env.REDSHIFT_DB_SCHEMA}.t_user_test_activity
      WHERE
        district_id = '${DISTRICT_ID}'
        AND term_id = '${TERM_ID}'
        AND progress_status in (1, 2)
        AND archived = 0
        AND report_key IN (${TEST_IDS.map(id => `'${id}'`).join(',')})
      `)
    ).rows;

    // AND start_date > ${FROM_DATE}
    // AND report_key = '${TEST_ID}'

    console.log("Total Redshift UTAs", rsUtas.length);

    const rsUtasMap = new Map();
    createMap(rsUtasMap, rsUtas, "test_activity_id");
    const missingUtas = [];
    for (const uta of mongoUTAs) {
      if (!rsUtasMap.get(`${uta}`)) {
        missingUtas.push(uta);
      }
    }

    console.log("Total Missing Utas", missingUtas.length);
    console.log("Missing UTAs", JSON.stringify(missingUtas, null, 2), "\n");
  } catch (e) {
    console.log("Error occurred\nerror => ", e);
  } finally {
    client.close();
    process.exit();
  }
})();
