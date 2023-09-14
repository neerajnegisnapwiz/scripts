const knex = require("knex");
const { MongoClient, ObjectID } = require("mongodb");
require('dotenv').config({path: __dirname + '/.env'})

const districtId = new ObjectID("5f173b9e74dfde5aaddbbc21");
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

    const rsUtas = (await redshift.raw(`select distinct(student_id) from t_user_test_activity where district_id='${districtId+""}' and test_id = '61e9c65e61c46c0009c2024b' and term_id = '610806cebaa904000908a185'`)).rows;

    console.log("Total Redshift UTAs", rsUtas.length)
    console.log('DATA\n', JSON.stringify(rsUtas, null, 2))
    // const rsUtasMap = new Map()
    // createMap(rsUtasMap, rsUtas, 'test_activity_id')
    // const missingUtas = []
    // for (const uta of mongoUTAs) {
    //   if (!rsUtasMap.get(`${uta}`)) {
    //     missingUtas.push(uta)
    //   }
    // }
    // console.log('Total Missing Utas', missingUtas.length)
    // console.log('Missing UTAs', JSON.stringify(missingUtas, null, 2), '\n')
  } catch (e) {
    console.log("Error occurred\nerror => ", e);
  } finally {
    client.close();
    process.exit()
  }
})();