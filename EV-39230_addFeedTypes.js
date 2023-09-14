const FEED_TYPES = {
  NWEA: {
    key: "NWEA",
    title: "NWEA",
    description: "",
    district_id: "",
    category: "academic",
    templateLink: "/JS/webresources/csv/NWEA_Template.csv"
  },
  CAASPP: {
    key: "CAASPP",
    title: "CAASPP",
    description: "",
    district_id: "",
    category: "academic",
    templateLink: "/JS/webresources/csv/CAASPP_Template.csv"
  },
  iReady_Math: {
    key: "iReady_Math",
    title: "iReady (Math)",
    description: "",
    district_id: "",
    category: "academic",
    templateLink: "/JS/webresources/csv/iReady_Math_Template.csv"
  },
  iReady_ELA: {
    key: "iReady_ELA",
    title: "iReady (ELA)",
    description: "",
    district_id: "",
    category: "academic",
    templateLink: "/JS/webresources/csv/iReady_ELA_Template.csv"
  },
  ATTENDANCE: {
    key: "ATTENDANCE",
    title: "Attendance",
    description: "",
    district_id: "",
    category: "non-academic",
    templateLink: "/JS/webresources/csv/Attendance_Template.csv"
  }
}

const FEED_TYPE_KEYS = ["NWEA", "ATTENDANCE", "iReady_ELA", "iReady_Math", "CAASPP"]

const districtId = process.argv[2]
const feedTypesToInsert = process.argv.slice(3)
const feedsToInsertKeys = feedTypesToInsert.length ? FEED_TYPE_KEYS.filter((key) => feedTypesToInsert.includes(key)) : FEED_TYPE_KEYS

function printInsertStatements(districtId, feedsToInsertKeys) {
  for (const feedKey of feedsToInsertKeys) {
    const { key, title, description, category, templateLink } = FEED_TYPES[feedKey]
    console.log(`insert into t_ds_feed_types values ('${key}', '${title}', '${description}', '${districtId}', '${category}', '${templateLink}');`)
  }
}

printInsertStatements(districtId, feedsToInsertKeys)