const knex = require("knex");
const { MongoClient, ObjectId } = require("mongodb");
require('dotenv').config({path: __dirname + '/.env'})

const districtId = new ObjectId("5ed3405403b7ad09240691e9");
const termId = new ObjectId("669ef1175bd1f75f22302da8");
const testId = new ObjectId("670e630b213a5500084b4c34");
const reportKey = new ObjectId("670e630b213a5500084b4c34");
const groups = [
  "66b63fe15158372e9233d0cf",
  "66b63fd95158372e92329dc5",
  "66b63fd85158372e923255ff",
  "66b63fea5158372e92355aac",
  "66b63fe15158372e9233c9d4",
  "66b63fd25158372e92315858",
  "66b63fd35158372e92318026",
  "66b63ff05158372e923626c8",
  "66b63fd75158372e92322fa8",
  "66b63fcc5158372e923066a6"
]
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
    const mongoUqas = [];
    let counter = 0;
    console.log('getting mongo docs')
    await db.collection("VUserQuestionActivities").find({
      groupIds: { $in: groups.map((id) => new ObjectId(id))},
      districtId,
      termId,
      testId,
      reportKey,
    }, {
      _id: 1
    }).forEach(doc => {
      console.log('getting one doc')
      if (counter % 100 === 0) {
        console.log(counter)
      }
      counter++;
      mongoUqas.push(doc._id)
    })
    console.log('Total Mongo UQAs', mongoUqas.length)

    const rsUqas = (await redshift.raw(`
        select question_activity_id
        from t_user_test_standard_activity 
        where district_id = '${districtId}'
        and term_id = '${termId}'
        and test_id = '${testId}'
      `)).rows;
    console.log("Total Redshift UQAs", rsUqas.length)

    const rsUqasMap = new Map()
    createMap(rsUqasMap, rsUqas, 'question_activity_id')

    const missingUqas = []
    for (const uqa of mongoUqas) {
      if (!rsUqasMap.get(`${uqa}`)) {
        missingUqas.push(uqa)
      }
    }
    console.log('Total Missing Uqas', missingUqas.length)
    console.log('Missing UQAs', JSON.stringify(missingUqas, null, 2), '\n')
  } catch (e) {
    console.log("Error occurred\nerror => ", e);
  } finally {
    process.exit()
  }
})();