const knex = require("knex");
const { isEmpty } = require('lodash')
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
  try {
    client = await getMongoClient();
    redshift = getRedshift();
    const groupIds = [
      "6107d58384e66e8d626db409",
      "6107d58484e66e8d626db55f",
      "6107d57884e66e8d626da002",
      "6107d56e84e66e8d626d93dd",
      "610cf41e84e66e8d6201c560",
      "610cf52a84e66e8d620ce00f",
      "610cf42984e66e8d6201f2bc",
      "6107d56e84e66e8d626d9412",
      "610cf42084e66e8d6201d00e",
      "6107d58684e66e8d626dba1b",
      "6115879f84e66e8d6258ca17",
      "610cf41384e66e8d62019ffd",
      "6107d58f84e66e8d626dcbd4",
      "610cf41e84e66e8d6201c31e",
      "610cf41484e66e8d6201a3bc",
      "6107d57984e66e8d626da5b9",
      "610cf43c84e66e8d6202595b",
      "6115879f84e66e8d6258ca17",
      "610cf41884e66e8d6201abce"
  ]
    console.log("Connected to DBs");
    const db = client.db();
    const groups = [];
    let counter = 0;
    await db.collection("VGroups").find({
      _id: { $in: groupIds.map(g => new ObjectID(g))}
    }, {
      parent: 1,
      primaryTeacherId: 1,
      owners: 1
    }).forEach(doc => {
      counter++;
      counter % 500 === 0 && console.log(counter)
      groups.push({
        _id: doc._id,
        parent: doc.parent,
        owners: doc.owners,
        primaryTeacherId: doc.primaryTeacherId
      })
    })

    console.log('Total Groups', groups.length)

    for (const group of groups) {
      const ownerFound = group.owners.find((own) => `${own.id}` === `${group.primaryTeacherId}`)
      if (isEmpty(ownerFound)) {
        console.log(`
        db.Groups.update({
          _id: ObjectId('${group._id}')
        }, {
          $addToSet: {
            owners: {
              id: ObjectId('${group.parent.id}')
            }
          }
        })
      `)
      }
      // if (`${group.primaryTeacherId}` === 'null' ||`${group.primaryTeacherId}` === 'undefined') {
      //     faultyGroups.push(group)
      // }
      // else {
      //   nonFaultyGroups.push(group)
      // }
    }
  } catch (e) {
    console.log("Error occurred\nerror => ", e);
  } finally {
    client.close();
    process.exit()
  }
})();