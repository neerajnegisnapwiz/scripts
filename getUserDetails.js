const { isEmpty } = require('lodash')
const { MongoClient, ObjectID } = require("mongodb");
require('dotenv').config({path: __dirname + '/.env'})

const getMongoClient = async () => {
  return MongoClient.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

(async () => {
  let client;
  try {
    client = await getMongoClient()
    console.log("Connected to Mongo")
    const db = client.db()
    const userId = ObjectID('5dce6787d2dac40009f79a03')
    let userDistrictIds = []
    let userSchoolIds = []
    let user = {}
    await db.collection("Users").find({
      _id: userId,
    }).forEach((doc) => {
      user = {
        userId: doc._id,
        userStatus: doc.status,
        isPremium: false,
      }
      userDistrictIds = doc.districtIds
      userSchoolIds = doc.institutionIds
    })
    await db.collection("OrgSubscriptions").find({ userId, subEndDate: { $gt: new Date() } }).forEach((doc) => {
      if (doc.subType === 'premium') {
        user.isPremium = true
        user.premiumType = doc.subType
      }
    })
    await  db.collection("InterestedStandardsSettings").find({
      orgId: { $in: userDistrictIds },
      orgType: 'teacher'
    }).forEach((doc) => {
      user.InterestedStandards = doc.curriculums
    })
    await  db.collection("InterestedStandardsSettings").find({
      orgId: { $in: userDistrictIds },
      orgType: 'district'
    }).forEach((doc) => {
      if (isEmpty(user.DistrictInterestedStandards) ) {
        user.DistrictInterestedStandards = [{
          districtId: doc.orgId,
          curriculums: doc.curriculums
        }]
      } else {
        user.DistrictInterestedStandards.push(doc.curriculums)
        user.DistrictInterestedStandards.push({
          districtId: doc.orgId,
          curriculums: doc.curriculums
        })
      }
    })
    await db.collection("InterestedStandardsSettings").find({
      orgId: { $in: userSchoolIds },
      orgType: 'institution'
    }).forEach((doc) => {
      if (isEmpty(user.SchoolInterestedStandards) ) {
        user.SchoolInterestedStandards = [{
          districtId: doc.orgId,
          curriculums: doc.curriculums
        }]
      } else {
        user.SchoolInterestedStandards.push(doc.curriculums)
        user.SchoolInterestedStandards.push({
          districtId: doc.orgId,
          curriculums: doc.curriculums
        })
      }
    })
    console.log('User', user)
  } catch (e) {
    console.log("Error occurred\nerror => ", e)
  } finally {
    client.close()
    process.exit()
  }
})()