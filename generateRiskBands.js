var mongo = require('mongodb')
const { ObjectId } = mongo

const rawRiskBandData = `Academic	iReady_ELA	ELA	1	1,2	3	4,5	1,2.5	5.5	8.5,10
Academic	iReady_Math	Mathematics	1	1,2	3	4,5	1,2.5	5.5	8.5,10
Academic	NWEA	ELA, Mathematics	1	1	2	3,4,5	1	5.5	8,9,10
Academic	CAASPP__Smarter Balanced Summative for ELA	ELA	1	2	3	4,5	1	5.5	8.5,10
Academic	CAASPP__Smarter Balanced Summative for Mathematics	Mathematics	1	2	3	4,5	1	5.5	8.5,10
Academic	CAASPP__California Science Test (CAST)	Science	1	2	3	4,5	1	5.5	8.5,10
Academic	CAASPP__CAA for ELA	ELA	1	2	3	4	1	5.5	10
Academic	CAASPP__CAA for Mathematics	Mathematics	1	2	3	4	1	5.5	10
Academic	CAASPP__CAA for Science	Science	1	2	3	4	1	5.5	10
Academic	CAASPP__California Spanish Assessment	Others	1	2	3	4	1	5.5	10
Academic	ILEARN	ELA, Mathematics, Science, Social Studies	1	2	3	4,5	1	5.5	8.5,10
Academic	STARR	ELA	1	1	-	2,3	1	-	8.5,10
Academic	GMAS_EOG	ELA, Mathematics, Science, Social Studies, Others	1	1	2	3,4	1	5.5	8.5,10
Academic	GMAS_EOC	ELA, Mathematics, Science, Social Studies, Others	1	1	2	3,4	1	5.5	8.5,10
Academic	Term_Grades_Screven	ELA, Mathematics, Science, Social Studies, Others	1	1	2	3,4	1	5.5	8.5,10
Academic	DRC_Beacon_ELA	ELA	1	1	2	3	1	5.5	10
Academic	DRC_Beacon_Math	Mathematics	1	1	2	3	1	5.5	10
Academic	LEAP_3_8	ELA, Mathematics, Science, Social Studies	1	1	2	3,4,5	1	5.5	8,9,10
Academic	HS_LEAP	ELA, Mathematics, Science, Social Studies	1	1	2	3,4,5	1	5.5	8,9,10
Academic	MCAS	ELA, Mathematics, Science	1	1	2	3, 4	1	5.5	8.5,10
Academic	FP BAS	ELA	1	1	2	3, 4	1	5.5	8.5,10
Academic	OSTP	ELA, Mathematics, Science, Social Studies	1	1	2	3, 4	1	5.5	8.5,10
Academic	NHSAS	Mathematics, ELA	1	1	2	3, 4	1	5.5	8.5,10
Academic	ELPAC	ELA	1	1	3	4,5	1	5.5	8.5,10
Academic	ACCESS	ELA	1	1	2,3	4,5,6	1	5,6	8,9,10
Academic	NJSLA_ELA_Math	ELA, Mathematics	1	1	2,3	4,5	1	5,6	8.5,10
Academic	NJSLA_Science	Science	1	1	2	3,4	1	5.5	8.5,10
Academic	KSA	ELA, Mathematics, Science Social Studies	1	1	2	3,4	1	5.5	8.5,10
Academic	NWEA_MAP_Reading_Fluency	ELA	1	1	4	5,6	1	5.5	8.5,10
Academic	DRC_WIDA_ELL	ELA	1	1	2,3	4,5,6	1	5,6	8,9,10
Academic	STAR_Reading	ELA	1	1	2	3,4	1	5.5	8.5,10
Academic	STAR_Math	Mathematics	1	1	2	3,4	1	5.5	8.5,10
Academic	HMH_Growth_Measure	ELA, Mathematics	1	1	2,3	4,5	1	5,6	8.5,10
Academic	Fastbridge_Early_Math_Screening	Mathematics	1	1	2	3,4	1	5.5	8.5,10
Academic	Fastbridge_Early_Reading_English_Screening	ELA	1	1	2	3,4	1	5.5	8.5,10
Academic	Fastbridge_aMath	Mathematics	1	1	2	3,4	1	5.5	8.5,10
Academic	Fastbridge_aReading	ELA	1	1	2	3,4	1	5.5	8.5,10`

const testTypes = [
  'GMAS_EOG',
  'GMAS_EOC',
  'NJSLA_Science',
  'NHSAS',
  'OSTP',
  'iReady_ELA',
  'MCAS',
  'Term_Grades',
  'DRC_Beacon_ELA',
  'NJSLA_ELA_Math',
  'NWEA_MAP_Reading_Fluency',
  'iReady_Math',
  'Fastbridge_Early_Math_Screening',
  'HMH_Growth_Measure'
]

const grades = [
  'TK',
  'O',
  'K',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
  '12',
  '11',
  '10',
  '1',
]
const districts = ['6524e939516d01a6aa2d5f00']
const tableName = 't_risk_band_42410'

function generate(input) {
    const commands = []
    const rows = input.split('\n')
    for (const row of rows) {
      const values = row.split('\t')
      const [
        risk_band_type,
        feed_type,
        _subjects,
        risk_weightage,
        rank_keys_high,
        rank_keys_medium,
        rank_keys_low,
        risk_level_high,
        risk_level_medium,
        risk_level_low,
      ] = values
      const subjects = _subjects.split(',')
      const riskBandId = new ObjectId()
      const max = null
      const risk_calc_method = 'nearest'
      const highRankKeys = rank_keys_high.split(',')
      const highRiskLevel = risk_level_high.split(',')
      const mediumRankKeys = rank_keys_medium.split(',')
      const mediumRiskLevel = risk_level_medium.split(',')
      const lowRankKeys = rank_keys_low.split(',')
      const lowRiskLevel = risk_level_low.split(',')
      if (testTypes.includes(feed_type)) {
        for (const districtId of districts) {
          for (const grade of grades) {
            for (const _subject of subjects) {
              const subject = _subject.trim()
              for (let i=0;i<highRankKeys.length;i++) {
                  highRankKeys[i] !== '-' && commands.push(`insert into ${tableName} values ('${riskBandId}', '${districtId}','${feed_type}','${risk_band_type.toLowerCase()}', '${grade}', '${subject}', 'High', ${highRiskLevel[i]}, ${highRankKeys[i]}, ${max}, ${risk_weightage}, '${risk_calc_method}');`)
              }
              for (let i=0;i<mediumRankKeys.length;i++) {
                  highRankKeys[i] !== '-' && commands.push(`insert into ${tableName} values ('${riskBandId}', '${districtId}','${feed_type}','${risk_band_type.toLowerCase()}', '${grade}', '${subject}', 'High', ${mediumRiskLevel[i]}, ${mediumRankKeys[i]}, ${max}, ${risk_weightage}, '${risk_calc_method}');`)
              }
              for (let i=0;i<lowRankKeys.length;i++) {
                  highRankKeys[i] !== '-' && commands.push(`insert into ${tableName} values ('${riskBandId}', '${districtId}','${feed_type}','${risk_band_type.toLowerCase()}', '${grade}', '${subject}', 'High', ${lowRiskLevel[i]}, ${lowRankKeys[i]}, ${max}, ${risk_weightage}, '${risk_calc_method}');`)
              } 
            }
          }
        }
      }
    }
    return commands.join('\n')
  }

console.log(generate(rawRiskBandData))
