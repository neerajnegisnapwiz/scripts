const knex = require("knex");
const { MongoClient, ObjectID } = require("mongodb");
const _ = require('lodash')
require('dotenv').config({path: __dirname + '/.env'})

console.log('starting...')

const districtId = new ObjectID("5f1d2b5f5dd16ded176b6b98");
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

(async () => {
  let redshift;
  let client;
  try {
    client = await getMongoClient();
    redshift = getRedshift();
    console.log("Connected to DBs");
    const db = client.db();
    const enrollments = [];
    let counter = 0;
    await db.collection("VEnrollments").find({
      districtId,
      role: 'student'
    }).forEach(doc => {
      // if (counter % 10000 === 0) {
      //   console.log(counter)
      // }
      counter++;
      enrollments.push({
        _id: `${doc._id}`,
        userId: `${doc.user._id}`,
        schoolId: `${doc.institutionId}`
      })
    })
    console.log('Total Mongo Enrollments', enrollments.length)
    const enrollmentsGroupedByStudents = _.groupBy(enrollments, 'userId')
    let max = 0
    let maxEntry = null
    console.log('Enrollments grouped by students', Object.values(enrollmentsGroupedByStudents)[0])
    Object.values(enrollmentsGroupedByStudents).forEach((d) => {
      const uniqBySchool = _.uniqBy(d, 'schoolId')
      console.log(uniqBySchool)
      if (uniqBySchool.length > max) {
        max = uniqBySchool.length
        maxEntry = uniqBySchool
      }
    })
    console.log('MAX schools per student', max)
    console.log('MAX entry', maxEntry)
  } catch (e) {
    console.log("Error occurred\nerror => ", e);
  } finally {
    client.close();
    process.exit()
  }
})();