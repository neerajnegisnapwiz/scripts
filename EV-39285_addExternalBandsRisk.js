const bson = require('bson')

const DEFAULT_CONFIG = `grades,risk_band_type,test_types,subjects,risk_label,risk_level,min
all,academic,iReady_Math,Mathematics,High,4,1
all,academic,iReady_ELA,ELA,High,4,1
all,academic,iReady_Math,Mathematics,High,4,2
all,academic,iReady_ELA,ELA,High,4,2
all,academic,iReady_Math,Mathematics,Medium,2,3
all,academic,iReady_ELA,ELA,Medium,2,3
all,academic,iReady_Math,Mathematics,Medium,2,4
all,academic,iReady_ELA,ELA,Medium,2,4
all,academic,iReady_Math,Mathematics,Low,1,5
all,academic,iReady_ELA,ELA,Low,1,5
all,academic,NWEA,Mathematics,High,4,1
all,academic,NWEA,ELA,High,4,1
all,academic,NWEA,Mathematics,High,4,2
all,academic,NWEA,ELA,High,4,2
all,academic,NWEA,Mathematics,Medium,2,3
all,academic,NWEA,ELA,Medium,2,3
all,academic,NWEA,Mathematics,Low,1,4
all,academic,NWEA,ELA,Low,1,4
all,academic,NWEA,Mathematics,Low,1,5
all,academic,NWEA,ELA,Low,1,5
all,academic,CAASPP__Smarter Balanced Summative for ELA,ELA,High,4,2
all,academic,CAASPP__Smarter Balanced Summative for ELA,ELA,Medium,2,3
all,academic,CAASPP__Smarter Balanced Summative for ELA,ELA,Low,1,4
all,academic,CAASPP__Smarter Balanced Summative for ELA,ELA,Low,1,5
all,academic,CAASPP__Smarter Balanced Summative for Mathematics,Mathematics,High,4,2
all,academic,CAASPP__Smarter Balanced Summative for Mathematics,Mathematics,Medium,2,3
all,academic,CAASPP__Smarter Balanced Summative for Mathematics,Mathematics,Low,1,4
all,academic,CAASPP__Smarter Balanced Summative for Mathematics,Mathematics,Low,1,5,
all,academic,CAASPP__California Science Test (CAST),Science,High,4,2
all,academic,CAASPP__California Science Test (CAST),Science,Medium,2,3
all,academic,CAASPP__California Science Test (CAST),Science,Low,1,4
all,academic,CAASPP__California Science Test (CAST),Science,Low,1,5
all,academic,CAASPP__CAA for ELA,ELA,High,4,2
all,academic,CAASPP__CAA for ELA,ELA,Medium,2,3
all,academic,CAASPP__CAA for ELA,ELA,Low,1,4
all,academic,CAASPP__CAA for Mathematics,Mathematics,High,4,2
all,academic,CAASPP__CAA for Mathematics,Mathematics,Medium,2,3
all,academic,CAASPP__CAA for Mathematics,Mathematics,Low,1,4
all,academic,CAASPP__CAA for Science,Science,High,4,2
all,academic,CAASPP__CAA for Science,Science,Medium,2,3
all,academic,CAASPP__CAA for Science,Science,Low,1,4
all,academic,CAASPP__California Spanish Assessment,Others,High,4,2
all,academic,CAASPP__California Spanish Assessment,Others,Medium,2,3
all,academic,CAASPP__California Spanish Assessment,Others,Low,1,4`


const ALL_GRADES = ['TK', 'K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'O']
const ALL_TEST_TYPES = [
  'iReady_Math',
  'iReady_ELA',
  'NWEA',
  'CAASPP__Smarter Balanced Summative for ELA',
  'CAASPP__California Science Test (CAST)',
  'CAASPP__CAA for ELA',
  'CAASPP__CAA for Mathematics',
  'CAASPP__CAA for Science',
  'CAASPP__California Spanish Assessment'
]

const districtId = process.argv[2]

function printInsertStatements(districtId, feedsToInsertKeys) {
  const csvRows = DEFAULT_CONFIG.split('\n')
  const headerRow  = csvRows.shift()
  const riskBandIds = {}
  ALL_TEST_TYPES.forEach((testType) => {
    riskBandIds[testType] = `${new bson.ObjectID()}`
  })
  console.log('INSERT INTO "t_risk_band" ("risk_band_id", "district_id", "assessment_type", "risk_band_type", "grade", "subject", "band_label", "band_level", "min", "max", "risk_weightage", "risk_calc_method") VALUES\n')
  for(const row of csvRows) {
    const [ grades, testType, testTitle, subject, riskLabel, riskLevel, min ] = row.split(',')
    if (grades === 'all') {
      for(const grade of ALL_GRADES) {
        console.log(`('${riskBandIds[testTitle]}', '${districtId}','${testTitle}', '${testType}', '${grade}', '${subject}', '${riskLabel}', ${riskLevel}, ${min}, ${null}, 1, 'ceil');`)
      }
    }
  }
    
}

printInsertStatements(districtId)