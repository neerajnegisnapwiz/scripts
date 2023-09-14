const knex = require("knex");
const { MongoClient, ObjectID } = require("mongodb");
require('dotenv').config({path: __dirname + '/.env'})

const districtId = new ObjectID("5f1d9aab5dd16ded172daaf1");
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
  const groupIds = [
    "6110e05e84e66e8d62ad0494",
    "6110e07d84e66e8d62ae4b1a",
    "6110e06384e66e8d62ad32ae",
    "6227378f84e66e8d62ca09af",
    "6110e05c84e66e8d62acf6b6",
    "61729a5b84e66e8d6226a2ee",
    "6110e04b84e66e8d62ac78fc",
    "6110e0a184e66e8d62af66f8",
    "616ff73e84e66e8d6215e705",
    "61b1e21b84e66e8d624f3212",
    "61e9413a84e66e8d62b0a70d",
    "6233151984e66e8d62cd3118",
    "61e9413b84e66e8d62b0ad09",
    "6110e06a84e66e8d62ad7e1e",
    "61a9f92184e66e8d6208655d",
    "6110e04784e66e8d62ac5d43",
    "6110e04f84e66e8d62ac92fa",
    "6110e08f84e66e8d62aef3a0",
    "617aad3a84e66e8d6223f6d1",
    "6110e07484e66e8d62ade2cb",
    "61f27f1484e66e8d621793a7",
    "623ef2a2877224ba1b7f562d",
    "6110e06184e66e8d62ad21a4",
    "623afe2b877224ba1bfeb0e0",
    "6110e0ab84e66e8d62af91a4",
    "61a9f92384e66e8d62087621",
    "62710ba1951d49af6e043fd6",
    "624438ab877224ba1b213213",
    "61e1582284e66e8d6298215e",
    "6110e05b84e66e8d62acec11",
    "6110e05d84e66e8d62acff30",
    "6110e06a84e66e8d62ad787e",
    "61bb1cca84e66e8d6274bbdc",
    "6110e08384e66e8d62ae85f7",
    "6149696384e66e8d62b092e0",
    "61b1e21a84e66e8d624f240c",
    "623afe21877224ba1bfe8379",
    "6110e08084e66e8d62ae5e49",
    "6110e07684e66e8d62adfc1a",
    "6110e07784e66e8d62ae08f9",
    "6110e04c84e66e8d62ac7a57",
    "6110e09d84e66e8d62af52ea",
    "6216142e84e66e8d628e2fa3",
    "6110e06884e66e8d62ad66d8",
    "6110e07684e66e8d62ae0059",
    "61e1581f84e66e8d6297feff",
    "6110e07a84e66e8d62ae279e",
    "6110e09684e66e8d62af240e",
    "6110e09684e66e8d62af2835",
    "6110e06b84e66e8d62ad872d",
    "6110e08484e66e8d62ae92a4",
    "6110e08b84e66e8d62aed576",
    "6110e09784e66e8d62af2be8",
    "6110e0a484e66e8d62af71d1",
    "6110e07e84e66e8d62ae5359",
    "6110e07784e66e8d62ae080b",
    "61f9131384e66e8d62b61183",
    "6110e05784e66e8d62accd9a",
    "612cac6a84e66e8d622da0e2",
    "61f9131484e66e8d62b61b49",
    "61b0909684e66e8d62b854ef",
    "6152e7e184e66e8d62f20df4",
    "6110e04e84e66e8d62ac8c23",
    "6110e06784e66e8d62ad580b",
    "6126782f84e66e8d624f8f67",
    "623afe32877224ba1bfec8e9",
    "61435ca284e66e8d6280082c",
    "612677cc84e66e8d62456821",
    "6110e07084e66e8d62adbc76",
    "6110e06284e66e8d62ad2e23",
    "623da114877224ba1b892c9f",
    "623afe2f877224ba1bfec0f0",
    "61a7561c84e66e8d62626c8d",
    "6110e09d84e66e8d62af4fed",
    "621f5ca784e66e8d6265f347",
    "6110e07384e66e8d62addfc0",
    "6110e08184e66e8d62ae724c",
    "6110e07c84e66e8d62ae37ae",
    "61efd89984e66e8d62d29a89",
    "6110e06c84e66e8d62ad9236",
    "61b0909784e66e8d62b8606a",
    "6110e05584e66e8d62acb7d6",
    "6110e05784e66e8d62acc6fd",
    "61b1e21a84e66e8d624f28f5",
    "6231c39184e66e8d6230ea92",
    "6110e07784e66e8d62ae0538",
    "6110e06f84e66e8d62adb032",
    "6110e06984e66e8d62ad758e",
    "6110e09a84e66e8d62af3dbd",
    "6110e05884e66e8d62acd67a",
    "61e9413584e66e8d62b07740",
    "6110e05a84e66e8d62ace5a3",
    "6110e0a784e66e8d62af80c5",
    "6110e08884e66e8d62aeb36c",
    "61a9f92484e66e8d62088219",
    "61b8798c84e66e8d623c44b7",
    "6110e05384e66e8d62acab35",
    "61a9f92384e66e8d62087b73",
    "61a7561984e66e8d62624bb5",
    "6110e08184e66e8d62ae70e0"
]
  try {
    client = await getMongoClient();
    redshift = getRedshift();
    console.log("Connected to DBs");
    const db = client.db();
    const groups = [
      "6110e05e84e66e8d62ad0494",
      "6110e07d84e66e8d62ae4b1a",
      "6110e06384e66e8d62ad32ae",
      "6227378f84e66e8d62ca09af",
      "6110e05c84e66e8d62acf6b6",
      "61729a5b84e66e8d6226a2ee",
      "6110e04b84e66e8d62ac78fc",
      "6110e0a184e66e8d62af66f8",
      "616ff73e84e66e8d6215e705",
      "61b1e21b84e66e8d624f3212",
      "61e9413a84e66e8d62b0a70d",
      "6233151984e66e8d62cd3118",
      "61e9413b84e66e8d62b0ad09",
      "6110e06a84e66e8d62ad7e1e",
      "61a9f92184e66e8d6208655d",
      "6110e04784e66e8d62ac5d43",
      "6110e04f84e66e8d62ac92fa",
      "6110e08f84e66e8d62aef3a0",
      "617aad3a84e66e8d6223f6d1",
      "6110e07484e66e8d62ade2cb",
      "61f27f1484e66e8d621793a7",
      "623ef2a2877224ba1b7f562d",
      "6110e06184e66e8d62ad21a4",
      "623afe2b877224ba1bfeb0e0",
      "6110e0ab84e66e8d62af91a4",
      "61a9f92384e66e8d62087621",
      "62710ba1951d49af6e043fd6",
      "624438ab877224ba1b213213",
      "61e1582284e66e8d6298215e",
      "6110e05b84e66e8d62acec11",
      "6110e05d84e66e8d62acff30",
      "6110e06a84e66e8d62ad787e",
      "61bb1cca84e66e8d6274bbdc",
      "6110e08384e66e8d62ae85f7",
      "6149696384e66e8d62b092e0",
      "61b1e21a84e66e8d624f240c",
      "623afe21877224ba1bfe8379",
      "6110e08084e66e8d62ae5e49",
      "6110e07684e66e8d62adfc1a",
      "6110e07784e66e8d62ae08f9",
      "6110e04c84e66e8d62ac7a57",
      "6110e09d84e66e8d62af52ea",
      "6216142e84e66e8d628e2fa3",
      "6110e06884e66e8d62ad66d8",
      "6110e07684e66e8d62ae0059",
      "61e1581f84e66e8d6297feff",
      "6110e07a84e66e8d62ae279e",
      "6110e09684e66e8d62af240e",
      "6110e09684e66e8d62af2835",
      "6110e06b84e66e8d62ad872d",
      "6110e08484e66e8d62ae92a4",
      "6110e08b84e66e8d62aed576",
      "6110e09784e66e8d62af2be8",
      "6110e0a484e66e8d62af71d1",
      "6110e07e84e66e8d62ae5359",
      "6110e07784e66e8d62ae080b",
      "61f9131384e66e8d62b61183",
      "6110e05784e66e8d62accd9a",
      "612cac6a84e66e8d622da0e2",
      "61f9131484e66e8d62b61b49",
      "61b0909684e66e8d62b854ef",
      "6152e7e184e66e8d62f20df4",
      "6110e04e84e66e8d62ac8c23",
      "6110e06784e66e8d62ad580b",
      "6126782f84e66e8d624f8f67",
      "623afe32877224ba1bfec8e9",
      "61435ca284e66e8d6280082c",
      "612677cc84e66e8d62456821",
      "6110e07084e66e8d62adbc76",
      "6110e06284e66e8d62ad2e23",
      "623da114877224ba1b892c9f",
      "623afe2f877224ba1bfec0f0",
      "61a7561c84e66e8d62626c8d",
      "6110e09d84e66e8d62af4fed",
      "621f5ca784e66e8d6265f347",
      "6110e07384e66e8d62addfc0",
      "6110e08184e66e8d62ae724c",
      "6110e07c84e66e8d62ae37ae",
      "61efd89984e66e8d62d29a89",
      "6110e06c84e66e8d62ad9236",
      "61b0909784e66e8d62b8606a",
      "6110e05584e66e8d62acb7d6",
      "6110e05784e66e8d62acc6fd",
      "61b1e21a84e66e8d624f28f5",
      "6231c39184e66e8d6230ea92",
      "6110e07784e66e8d62ae0538",
      "6110e06f84e66e8d62adb032",
      "6110e06984e66e8d62ad758e",
      "6110e09a84e66e8d62af3dbd",
      "6110e05884e66e8d62acd67a",
      "61e9413584e66e8d62b07740",
      "6110e05a84e66e8d62ace5a3",
      "6110e0a784e66e8d62af80c5",
      "6110e08884e66e8d62aeb36c",
      "61a9f92484e66e8d62088219",
      "61b8798c84e66e8d623c44b7",
      "6110e05384e66e8d62acab35",
      "61a9f92384e66e8d62087b73",
      "61a7561984e66e8d62624bb5",
      "6110e08184e66e8d62ae70e0"
  ];
    // let counter = 0;
    // await db.collection("VGroups").find({
    //   _id: { $in: groupIds.map((g) => ObjectID(g))}
    // }, {
    //   parent: 1,
    //     primaryTeacherId: 1,
    //     owners: 1
    // }).forEach(doc => {
    //   groups.push(doc)
    // })
    // console.log('Total Groups', groups.length)
    const enrollments = []
    await db.collection("VEnrollments").find({
        'group._id': { $in: groups.map((g) => ObjectID(g)) },
        role: 'teacher'
    }).forEach(doc => {
        enrollments.push(doc)
    })
    // for (const group of groups) {
    //     if (!enrollments.find((enroll) => `${enroll.group._id}` === `${group._id}` && `${enroll.user._id}` === `${group.parent.id}`)) {
    //         console.log('Enrollment not found for group', group)
    //     }
    // }
    const activeEnrollments = []
    for(const enrollment of enrollments) {
      if(enrollment.status !== 0) {
        activeEnrollments.push(enrollment)
      }
    }
    console.log('Total enrollment', enrollments.length)
    console.log('Active enrollment', activeEnrollments.length)
    console.log('Archived enrollments', enrollments.length - activeEnrollments.length)
  } catch (e) {
    console.log("Error occurred\nerror => ", e);
  } finally {
    client.close();
    process.exit()
  }
})();