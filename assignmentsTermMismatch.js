const { MongoClient, ObjectId } = require("mongodb")
const _ = require('lodash')
require('dotenv').config({path: __dirname + '/.env'})

console.log('starting...')

const districtId = new ObjectId("60a82d6a84e66e8d627d075b")
const termId = new ObjectId("62d7e047b60ba600092509a1")

const getMongoClient = async () =>
  MongoClient.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

(async () => {
  let redshift;
  let client;
  try {
    client = await getMongoClient()
    console.log("Connected to DBs")
    const db = client.db()
    const assignments = []
    await db.collection("VAssignments").find({
      districtId,
      termId
    }).forEach(doc => {
      assignments.push({
        _id: `${doc._id}`,
        groups: `${doc.class}`
      })
    })
    console.log('Total Mongo Assignments', assignments.length)
    console.log(assignments)
  } catch (e) {
    console.log("Error occurred\nerror => ", e);
  } finally {
    client.close();
    process.exit()
  }
})();