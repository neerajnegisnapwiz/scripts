const { MongoClient, ObjectID, ObjectId } = require("mongodb");
require('dotenv').config({path: __dirname + '/.env'})

const getMongoClient = async () =>
  MongoClient.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });



(async () => {
  const uqas = [
    '668e4d87dcd5de6e62931b12',
    '668e4dacdcd5de6e6293305e',
    '668e4da5dcd5de6e62932cae',
    '668e4de7dcd5de6e62936310',
    '668e4e14dcd5de6e6293aa44',
    '668e4e14dcd5de6e6293aa47',
    '668e4e14dcd5de6e6293aa4b',
    '668e4dc7dcd5de6e629340db',
    '668e4dc7dcd5de6e629340e1',
    '668e4df7dcd5de6e629379fa',
    '668e4e0bdcd5de6e62939b3d',
    '668e4e12dcd5de6e6293a625',
    '668e4dd8dcd5de6e62935145',
    '668e4dd8dcd5de6e62935146',
    '668e4e01dcd5de6e62938c23',
    '668e4e12dcd5de6e6293a5ce',
    '668e4dc5dcd5de6e62933f90',
    '668e4df8dcd5de6e62937b11',
    '668e4e0cdcd5de6e62939e9d',
    '668e4df2dcd5de6e629375bf',
    '668e4dc0dcd5de6e62933d4a',
    '668e4dc3dcd5de6e62933ef9',
    '668e4dcedcd5de6e62934844',
    '668e4dd2dcd5de6e62934bc3',
    '668e4ddedcd5de6e62935891',
    '668e4ddedcd5de6e62935895',
    '668e4ddedcd5de6e62935898',
    '668e4df8dcd5de6e62937b55',
    '668e4dd5dcd5de6e62934e8e',
    '668e4de6dcd5de6e6293625b',
    '668e4decdcd5de6e62936c2e',
    '668e4e09dcd5de6e6293991b',
    '668e4ddcdcd5de6e62935548',
    '668e4deddcd5de6e62936de4',
    '668e4df6dcd5de6e6293794c',
    '668e4de4dcd5de6e62935fab',
    '668e4deedcd5de6e62936fd6',
    '668e4df6dcd5de6e6293790c',
    '668e4e00dcd5de6e62938b0e',
    '668e4e13dcd5de6e6293a736',
    '668e4df4dcd5de6e629377de',
    '668e4e09dcd5de6e62939930',
    '668e4e10dcd5de6e6293a36d',
    '668e4e12dcd5de6e6293a68b',
    '668e4de2dcd5de6e62935d99',
    '668e4decdcd5de6e62936d41',
    '668e4e06dcd5de6e6293950c',
    '668e4dcbdcd5de6e629344ff',
    '668e4ddddcd5de6e629356e3',
    '668e4de4dcd5de6e62935fe3',
    '668e4decdcd5de6e62936b8a',
    '668e4e03dcd5de6e62938dc4',
    '668e4ddedcd5de6e62935783',
    '668e4ddedcd5de6e62935787',
    '668e4e05dcd5de6e62939100',
    '668e4e0bdcd5de6e62939b8f',
    '668e4dfddcd5de6e62938630',
    '668e4e09dcd5de6e629399ca',
    '668e4e3ddcd5de6e6293e78c',
    '668e4e6fdcd5de6e629443bd',
    '668e4e69dcd5de6e629437b9',
    '668e4e94dcd5de6e62948020',
    '668e4e97dcd5de6e62948510',
    '668e4ea4dcd5de6e62949af3',
    '668e4e97dcd5de6e629484ad',
    '668e4e5edcd5de6e62942923',
    '668e4e8ddcd5de6e629474ce',
    '668e4e67dcd5de6e62943634',
    '668e4e7ddcd5de6e629454ec',
    '668e4e5cdcd5de6e6294267e',
    '668e4e8ddcd5de6e6294744c',
    '668e4eaedcd5de6e6294a8e0',
    '668e4eaedcd5de6e6294a8e3',
    '668e4eaedcd5de6e6294a8e5',
    '668e4e73dcd5de6e6294489a',
    '668e4e82dcd5de6e62945c1a',
    '668e4ec0dcd5de6e6294c981',
    '668e4ea4dcd5de6e62949a43',
    '668e4eccdcd5de6e6294d7ef',
    '668e4e7edcd5de6e62945649',
    '668e4e8bdcd5de6e62947061',
    '668e4e94dcd5de6e62947fec',
    '668e4e98dcd5de6e629485f9',
    '668e4e87dcd5de6e629468ef',
    '668e4e78dcd5de6e62945045',
    '668e4ec6dcd5de6e6294cf66',
    '668e4ec3dcd5de6e6294cca9',
    '668e4e60dcd5de6e62942b9d',
    '668e4e61dcd5de6e62942ca4',
    '668e4eb6dcd5de6e6294b609',
    '668e4ec1dcd5de6e6294c9e7',
    '668e4ec5dcd5de6e6294ce0e',
    '668e4ecddcd5de6e6294d8f5',
    '668e4e6fdcd5de6e629443a3',
    '668e4e9bdcd5de6e629489df',
    '668e4ea5dcd5de6e62949bb1',
    '668e4ea7dcd5de6e62949fcb',
    '668e4e80dcd5de6e629459b8',
    '668e4e81dcd5de6e62945b0b',
    '668e4e90dcd5de6e62947b37',
    '668e4eccdcd5de6e6294d77d',
    '668e4ec1dcd5de6e6294ca29',
    '668e4eb8dcd5de6e6294bab5',
    '668e4eeadcd5de6e6295140e',
    '668e4ebcdcd5de6e6294c255',
    '668e4ee1dcd5de6e62950835',
    '668e4ed7dcd5de6e6294f2ba',
    '668e4ec1dcd5de6e6294ca35',
    '668e4ec9dcd5de6e6294d44b',
    '668e4edadcd5de6e6294fb54',
    '668e4ebcdcd5de6e6294c1b2',
    '668e4ec8dcd5de6e6294d3f6',
    '668e4ef5dcd5de6e62952686',
    '668e4ef6dcd5de6e629526b3',
    '668e4f21dcd5de6e629566eb',
    '668e4f44dcd5de6e62959509',
    '668e4f60dcd5de6e6295c9b1',
    '668e4f74dcd5de6e6295df9c'
  ]
  let redshift;
  let client;
  try {
    client = await getMongoClient();
    console.log("Connected to DBs");
    const db = client.db();
    const mongoUqas = [];
    await db.collection("VUserQuestionActivities").find({
     _id: { $in: uqas.map((uqa) => new ObjectID(uqa))}
    }).forEach(doc => {
      mongoUqas.push(doc)
    })
    console.log('Total Mongo UQAs', mongoUqas.length)
    console.log(JSON.stringify(mongoUqas, null, 2))
  } catch (e) {
    console.log("Error occurred\nerror => ", e);
  } finally {
    process.exit()
  }
})();
