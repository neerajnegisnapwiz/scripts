const knex = require("knex");
const { MongoClient, ObjectID } = require("mongodb");
require('dotenv').config({path: __dirname + '/.env'})

const districtId = new ObjectID("5f086a45c92fb82b069bc6c9");
const getRedshift = () =>
  knex({
    client: "redshift",
    searchPath: [process.env.REDSHIFT_DB_SCHEMA || "edulastic"],
    connection: {
      host: process.env.REDSHIFT_DB_URI || "localhost",
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
    map.set(`${item[key]}`, item[key])
  }
}



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
    const groupIds = []
    const testIds = [
      // '6393006bc763ce0009d17ca3',
      // '63932bb4829953000802f7c2',
      '638f3ad9c75fe7000894d6d2',
      '638ef2b520609a0008fcd055',
    ]
    await db.collection("VUserTestActivities").find({
      districtId,
      testId: { $in: testIds.map((t) => ObjectID(t))},
      // groupId: { $in: groupIds.map((g) => ObjectID(g))}
    }, {
      _id: 1
    }).forEach(doc => {
      if (counter % 1000 === 0) {
        console.log(counter)
      }
      counter++;
      mongoUTAs.push(doc._id)
    })
    console.log('Total Mongo UTAs', mongoUTAs.length)
    const rsUtas = (await redshift.raw(`
        select test_activity_id 
        from t_user_test_activity 
        where district_id='${districtId+""}' 
        and report_key IN (${testIds.map((t) => `'${t}'`)}) 
      `)).rows;
      // and group_id IN (${groupIds.map((g) => `'${g}'`)})

    console.log("Total Redshift UTAs", rsUtas.length)
    const rsUtasMap = new Map()
    createMap(rsUtasMap, rsUtas, 'test_activity_id')
    const missingUtas = []
    for (const uta of mongoUTAs) {
      if (!rsUtasMap.get(`${uta}`)) {
        missingUtas.push(uta)
      }
    }
    console.log('Total Missing Utas', missingUtas.length)
    console.log('Missing UTAs', JSON.stringify(missingUtas, null, 2), '\n')
  } catch (e) {
    console.log("Error occurred\nerror => ", e);
  } finally {
    client.close();
    process.exit()
  }
})();