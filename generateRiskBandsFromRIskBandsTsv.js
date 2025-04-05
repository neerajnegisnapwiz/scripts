var mongo = require('mongodb')
const { ObjectId } = mongo

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
const districts = ['5f0c440bc92fb82b06750602']

const inputCSV = `all	academic	FP_BAS	FP_BAS	ELA	High	4	1		1	nearest
all	academic	FP_BAS	FP_BAS	ELA	Medium	2	2		1	nearest
all	academic	FP_BAS	FP_BAS	ELA	Low	1	3		1	nearest
all	academic	FP_BAS	FP_BAS	ELA	Low	1	4		1	nearest
all	academic	Term_Grades	Term_Grades	ELA, Mathematics, Science, Social Studies, Others	High	4	1		1	nearest
all	academic	Term_Grades	Term_Grades	ELA, Mathematics, Science, Social Studies, Others	Medium	2	2		1	nearest
all	academic	Term_Grades	Term_Grades	ELA, Mathematics, Science, Social Studies, Others	Low	1	3		1	nearest
all	academic	Term_Grades	Term_Grades	ELA, Mathematics, Science, Social Studies, Others	Low	1	4		1	nearest
all	academic	GMAS_EOC	GMAS_EOC	ELA, Mathematics, Science, Social Studies, Others	High	4	1		1	nearest
all	academic	GMAS_EOC	GMAS_EOC	ELA, Mathematics, Science, Social Studies, Others	Medium	2	2		1	nearest
all	academic	GMAS_EOC	GMAS_EOC	ELA, Mathematics, Science, Social Studies, Others	Low	1	3		1	nearest
all	academic	GMAS_EOC	GMAS_EOC	ELA, Mathematics, Science, Social Studies, Others	Low	1	4		1	nearest
all	academic	GMAS_EOG	GMAS_EOG	ELA, Mathematics, Science, Social Studies, Others	High	4	1		1	nearest
all	academic	GMAS_EOG	GMAS_EOG	ELA, Mathematics, Science, Social Studies, Others	Medium	2	2		1	nearest
all	academic	GMAS_EOG	GMAS_EOG	ELA, Mathematics, Science, Social Studies, Others	Low	1	3		1	nearest
all	academic	GMAS_EOG	GMAS_EOG	ELA, Mathematics, Science, Social Studies, Others	Low	1	4		1	nearest`

function generate(input) {
  const commands = []
  const rows = input.split('\n')
  for (const row of rows) {
    const values = row.split('\t')
    const [
      _grades,
      risk_band_type,
      feed_type,
      assessment_type,
      _subjects,
      risk_label,
      risk_level,
      min,
      _max,
      risk_weightage,
      risk_calc_method,
    ] = values
    const subjects = _subjects.split(',')
    const riskBandId = new ObjectId()
    const max = _max || null
    for (const districtId of districts) {
      for (const grade of grades) {
        for (const _subject of subjects) {
          const subject = _subject.trim()
          commands.push(`insert into t_risk_band values ('${riskBandId}', '${districtId}','${assessment_type}','${risk_band_type}', '${grade}', '${subject}', '${risk_label}', ${risk_level}, ${min}, ${max}, ${risk_weightage}, '${risk_calc_method}');`)
        }
      }
    }
  }
  return commands.join('\n')
}

console.log(generate(inputCSV))
