const { MongoClient, ObjectID } = require("mongodb");
require("dotenv").config({ path: __dirname + "/.env" });
const Fs = require("fs");
const CsvReadableStream = require("csv-reader");

const getMongoClient = async () =>
  MongoClient.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const args = process.argv.slice(2);
const params = {};
args.forEach((arg) => {
  const [key, value] = arg.split("=");
  params[key] = value;
});

function partitionCurriculums(rows, curriculumMaxId) {
  const curriculums = [];
  let currentCurriculum = null;
  let currentCurriculumId = ++curriculumMaxId;

  rows.forEach((row) => {
    if (row[0] !== "" && row.slice(1).every((el) => el === "")) {
      const [curriculum, subject] = row[0].split("-").map((s) => s.trim());
      currentCurriculum = {
        curriculum,
        _id: currentCurriculumId,
        subject,
        domains: [],
      };
      curriculums.push(currentCurriculum);
      currentCurriculumId += 1;
    } else {
      currentCurriculum.domains.push(row);
    }
  });
  return curriculums;
}

function parseNestedData(rows, curriculumId, standardMaxId) {
  const domainMap = {};
  let tloId;
  let eloId;
  let subEloId;

  rows.forEach((row) => {
    const domainId = row[0];
    const domainDesc = row[1];
    const clusterId = row[2];
    const clusterDesc = row[4];
    const standardId = row[5];
    const standardDesc = row[7];
    const grade = row[8];

    if (!domainMap[domainId]) {
      tloId = ++standardMaxId;
      domainMap[domainId] = {
        domainId: domainId,
        domainDesc: domainDesc,
        curriculumId,
        _id: tloId,
        level: "TLO",
        clusters: {},
      };
    }

    if (!domainMap[domainId].clusters[clusterId]) {
      eloId = ++standardMaxId;
      domainMap[domainId].clusters[clusterId] = {
        clusterId: clusterId,
        clusterDesc: clusterDesc,
        curriculumId,
        level: "ELO",
        tloId,
        _id: eloId,
        standards: {},
        grades: [grade],
      };
    }

    if (!domainMap[domainId].clusters[clusterId].standards[standardId]) {
      subEloId = ++standardMaxId;
      domainMap[domainId].clusters[clusterId].standards[standardId] = {
        standardId: standardId,
        standardDesc: standardDesc,
        curriculumId,
        _id: subEloId,
        tloId,
        eloId,
        level: "SUB_ELO",
        grades: [grade],
      };
    }
  });

  let domains = Object.values(domainMap).map((domain) => {
    let clusters = Object.values(domain.clusters).map((cluster) => {
      let standards = Object.values(cluster.standards).map((standard) => ({
        identifier: standard.standardId,
        description: standard.standardDesc,
        level: standard.level,
        curriculumId: standard.curriculumId,
        _id: standard._id,
        tloId: standard.tloId,
        eloId: standard.eloId,
        grades: standard.grades,
      }));
      return {
        identifier: cluster.clusterId,
        description: cluster.clusterDesc,
        level: cluster.level,
        curriculumId: cluster.curriculumId,
        _id: cluster._id,
        tloId: cluster.tloId,
        standards: standards,
        grades: cluster.grades,
      };
    });
    return {
      identifier: domain.domainId,
      description: domain.domainDesc,
      level: domain.level,
      curriculumId: domain.curriculumId,
      _id: domain._id,
      clusters: clusters,
    };
  });

  return {
    domains,
    updatedStandardMaxId: standardMaxId,
  };
}

async function processCsv() {
  const csvRows = [];
  let inputStream = Fs.createReadStream(params.file, "utf8");
  return new Promise((resolve, reject) => {
    inputStream
      .pipe(
        new CsvReadableStream({
          parseNumbers: true,
          parseBooleans: true,
          trim: true,
          skipLines: 1,
        })
      )
      .on("data", function (row) {
        csvRows.push(row);
      })
      .on("end", function () {
        console.log("All rows read!");
        resolve(csvRows);
      })
      .on("error", function (error) {
        reject(error);
      });
  });
}

async function syncDataToMongo(db, curriculums) {
  const finalOutput = {};
  const curriculumDataToInsert = curriculums.map(
    ({ curriculum, _id, grades, subject }) => ({
      curriculum,
      grades,
      subject,
      _id,
    })
  );
  const curriculumInsertResult = await db
    .collection("Curriculums")
    .insertMany(curriculumDataToInsert);
  finalOutput["Curriculums"] = curriculumInsertResult;

  const domainDataToInsert = curriculums
    .flatMap(({ domains }) => domains)
    .map(({ identifier, description, level, curriculumId, _id, grades }) => ({
      identifier,
      description,
      level,
      _id,
      curriculumId,
      grades,
    }));
  const domainInsertResult = await db
    .collection("Standards")
    .insertMany(domainDataToInsert);
  finalOutput["Domains"] = domainInsertResult;

  const clusterDataToInsert = curriculums
    .flatMap(({ domains }) => domains)
    .flatMap(({ clusters }) => clusters)
    .map(
      ({
        identifier,
        description,
        level,
        curriculumId,
        _id,
        grades,
        tloId,
      }) => ({
        identifier,
        description,
        level,
        _id,
        curriculumId,
        grades,
        tloId,
      })
    );
  const clusterInsertResult = await db
    .collection("Standards")
    .insertMany(clusterDataToInsert);
  finalOutput["Clusters"] = clusterInsertResult;

  const standardsDataToInsert = curriculums
    .flatMap(({ domains }) => domains)
    .flatMap(({ clusters }) => clusters)
    .flatMap(({ standards }) => standards)
    .map(
      ({
        identifier,
        description,
        level,
        curriculumId,
        _id,
        grades,
        tloId,
        eloId,
      }) => ({
        identifier,
        description,
        level,
        _id,
        curriculumId,
        grades,
        tloId,
        eloId,
      })
    );
  const standardsInsertResult = await db
    .collection("Standards")
    .insertMany(standardsDataToInsert);
  finalOutput["Standards"] = standardsInsertResult;

  console.log('\n Mongo Insertion Result', JSON.stringify(finalOutput, null, 2))
}

function getUniqueValues(array) {
  return Array.from(new Set(array));
}

function curateCurriculumAndDomainGrades(curriculums) {
  curriculums.forEach((curriculumObj) => {
    curriculumObj.domains.forEach((domainObj) => {
      let domainGrades = [];
      domainObj.clusters.forEach((clusterObj) => {
        domainGrades = domainGrades.concat(clusterObj.grades);
      });
      domainObj.grades = getUniqueValues(domainGrades);
    });

    let curriculumGrades = [];
    curriculumObj.domains.forEach((domainObj) => {
      curriculumGrades = curriculumGrades.concat(domainObj.grades);
    });
    curriculumObj.grades = getUniqueValues(curriculumGrades);
  });
  return curriculums;
}

let client;
(async () => {
  try {
    client = await getMongoClient();
    const db = client.db();

    const csvRows = await processCsv();

    const curriculumMaxIdDoc = await db
      .collection("Curriculums")
      .find({})
      .sort({ _id: -1 })
      .limit(1)
      .toArray();
    const curriculumMaxId = curriculumMaxIdDoc.length
      ? curriculumMaxIdDoc[0]._id
      : null;
    let curriculums = partitionCurriculums(csvRows, curriculumMaxId);

    const standardMaxIdDoc = await db
      .collection("Standards")
      .find({})
      .sort({ _id: -1 })
      .limit(1)
      .toArray();
    let standardMaxId = standardMaxIdDoc.length
      ? standardMaxIdDoc[0]._id
      : null;

    curriculums.forEach((curriculum) => {
      const { domains, updatedStandardMaxId } = parseNestedData(
        curriculum.domains,
        curriculum._id,
        standardMaxId
      );
      curriculum.domains = domains;
      standardMaxId = updatedStandardMaxId;
    });
    curriculums = curateCurriculumAndDomainGrades(curriculums);

    await syncDataToMongo(db, curriculums);
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    await client.close();
  }
})();
