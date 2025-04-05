const knex = require("knex");
const { isEmpty } = require("lodash");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config({ path: __dirname + "/.env" });

const districtId = new ObjectId("5ed3405403b7ad09240691e9");
const termId = new ObjectId("669ef1175bd1f75f22302da8");
const testId = new ObjectId("670e630b213a5500084b4c34");
const reportKey = new ObjectId("670e630b213a5500084b4c34");
const newSchoolId = new ObjectId('5f1dbc485dd16ded17e24597');
const oldSchoolId = new ObjectId('5f46776e5dd16ded179705e1');
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
  "66b63fcc5158372e923066a6",
];

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

(async () => {
  let redshift;
  let client;
  try {
    client = await getMongoClient();
    redshift = getRedshift();
    console.log("Connected to DBs");
    const db = client.db();
    const mongoUqaIds = [];
    let counter = 0;
    await db
      .collection("VUserQuestionActivities")
      .find({
        groupIds: { $in: groups.map((id) => new ObjectId(id)) },
        districtId,
        termId,
        testId,
        reportKey,
        schoolId: oldSchoolId
      })
      .forEach((doc) => {
        console.log(JSON.stringify(doc, null, 2));
        if (counter % 10000 === 0) {
          console.log(counter);
        }
        counter++;
        mongoUqaIds.push(doc._id);
      });
    console.log("Total Mongo UQAs", mongoUqaIds.length);
    const bulkAction = `
        db.UserQuestionActivities.updateMany(
            { _id: { $in: [${mongoUqaIds.map((id) => `ObjectId('${id}')`)}] } }, 
            { $set: { schoolId: ObjectId(${newSchoolId}) } }
        )
     `
    console.log('Command', JSON.stringify(bulkAction, null, 2))
  } catch (e) {
    console.log("Error occurred\nerror => ", e);
  } finally {
    process.exit();
  }
})();
