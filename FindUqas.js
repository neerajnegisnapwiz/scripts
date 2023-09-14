const knex = require("knex");
const { MongoClient, ObjectID, ObjectId } = require("mongodb");
require('dotenv').config({path: __dirname + '/.env'})

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
    const db = client.db();
    console.log("Connected to DBs");
    // const batchSize = 50000
    // let skipCount = 0
    // let batchData = []
    // let totalData = []
    // let counter = 0
    // let hasData = true
    const uqas = []
    const districts = ['5f1d2b5f5dd16ded176b6b98']
    let counter = 0
    await db.collection("VDistricts").find().limit(10).forEach(doc => districts.push(doc._id))
    // for (const districtId of districts.slice(0, 1)) {
      await db.collection("VUserQuestionActivities").find({
        districtId: ObjectID('5f1d2b5f5dd16ded176b6b98'),
        rubricId: ObjectId('6138f6e7e0f3300009a6ad30')
      }).forEach(doc => {
        console.log(doc)
        counter++;
        counter % 5 === 0 && console.log(counter)
        // uqas.push({
        //   _id: doc._id,
        //   districtId: doc.districtId,
        //   termId: doc.termId,
        //   qId: doc.qId,
        //   testItemId: doc.testItemId,
        // })
      })
    // }
    console.log('UQAs', uqas)
    // console.log('districts', districts.length)
    // while(hasData) {
    //   let currentCounter = 0
    //   await db.collection("VUserQuestionActivities")
    //     .find({
    //       rubricFeedback: { $exists: true, $ne: null }
    //     })
    //     .skip(skipCount)
    //     .limit(batchSize)
    //     .forEach(doc => {
    //       currentCounter++
    //       totalData.push({
    //         _id: doc._id,
    //         districtId: doc.districtId,
    //         termId: doc.termId,
    //         qId: doc.qId,
    //         testItemId: doc.testItemId,
    //       })
    //     })
    //   skipCount += batchSize
    //   if (currentCounter !== batchSize) {
    //     hasData = false
    //   }
    //   console.log('Finished batch, skip count: ', skipCount)
    //   client.close()
    // }
    // console.log('Total data', totalData)
  } catch (e) {
    console.log("Error occurred\nerror => ", e);
  } finally {
    client.close();
    process.exit()
  }
})();