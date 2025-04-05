const knex = require("knex");
require("dotenv").config({ path: __dirname + "/.env" });

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

const createMap = (map, items, key) => {
  for (const item of items) {
    map.set(`${item[key]}`, item[key]);
  }
};

const recordIds = [
  "67dc0efadab5b50df7162287",
  "67d16d9caffe520f0ce05cba",
  "67d01c1faffe520f0c303faa",
  "67d80536dab5b50df7e3fb9a",
  "67cb1804d9a892e818b9f6f3",
  "67d01c00affe520f0c2f3691",
  "67d01c0faffe520f0c2fba9d",
  "67d16d9caffe520f0ce05cba",
  "67d80536dab5b50df7e3fb9a",
  "67d01c04affe520f0c2f5213",
  "67d2bf25affe520f0cec365a",
  "67d01bffaffe520f0c2f2f8d",
  "67d01c0caffe520f0c2fa044",
  "67b80608d9a892e8187a935d",
  "67b80608d9a892e8187a9ec3",
  "67dc0eeadab5b50df711f5de",
  "67b8f6aad9a892e8181a9970",
  "67b8f6dbd9a892e8181e5a62",
  "67b8f70ed9a892e818221b86",
  "67dc0eecdab5b50df712a705",
  "67dc0efcdab5b50df716ac02",
  "67dc0ef7dab5b50df71566de",
  "67dc0f05dab5b50df7194f84",
  "67dc0ef8dab5b50df715c9b7",
  "67dc0eeedab5b50df713243e",
  "67dc0eeadab5b50df711f741",
  "67dc0f01dab5b50df7180009",
  "67d47bc5affe520f0c1456d4",
  "67d47bceaffe520f0c166361",
  "67d47bbaaffe520f0c11b173",
  "67d47bcaaffe520f0c156637",
  "67d47b24affe520f0cefae22",
  "67d47b47affe520f0cf7c8dc",
  "67d47b9eaffe520f0c0b6005",
  "67d47bb2affe520f0c0fdefe",
  "67d47bb4affe520f0c107560",
  "67e200a1dab5b50df7e090a9",
  "67e200a1dab5b50df7e090a9",
  "67e6183bdab5b50df78ef13d",
  "67e6183bdab5b50df78ef13d",
  "67b7d4add9a892e818a5bd13",
  "67b7d4f5d9a892e818a78a0e",
  "67b7d506d9a892e818a7f44a",
  "67b7d516d9a892e818a8664c",
  "67b7e0c8d9a892e818f07b16",
  "67d4d16baffe520f0c9f4585",
  "67d4d16baffe520f0c9f4585",
  "67896c6d55b913c11bb95a2e",
  "67ebbf040827304395068b36",
  "67ed034b08273043956125c1",
  "67ed034e0827304395613500",
  "67ed034e0827304395613506",
  "67ed034e082730439561350a",
  "67ed034e0827304395613511",
  "67ed034e082730439561351e",
  "67ed034e0827304395613527",
  "67ed034e0827304395613503",
  "67ed034e0827304395613506",
  "67ed034e0827304395613511",
];

const recordsString = recordIds.map((id) => `'${id}'`).join(",");

const queryField = "question_activity_id";

const RS_QUERY = `
    SELECT ${queryField}
    FROM ${process.env.REDSHIFT_DB_SCHEMA}.t_user_test_standard_activity
    WHERE ${queryField} in (${recordsString})
`;

(async () => {
  let redshift;
  let client;
  try {
    redshift = getRedshift();
    console.log("Connected to DBs");

    const RS_records = (await redshift.raw(RS_QUERY)).rows;

    console.log("Total Redshift Records", RS_records.length);

    const RS_records_map = new Map();
    createMap(RS_records_map, RS_records, queryField);
    const missingRecords = [];
    for (const recordId of recordIds) {
      if (!RS_records_map.get(`${recordId}`)) {
        missingRecords.push(recordId);
      }
    }

    console.log(`Total Missing Records`, missingRecords.length);
    console.log(
      `Missing Records`,
      JSON.stringify(missingRecords, null, 2),
      "\n"
    );
  } catch (e) {
    console.log("Error occurred\nerror => ", e);
  } finally {
    // client.close();
    process.exit();
  }
})();
