import csv, os, io
from argparse import ArgumentParser, Namespace
from pathlib import Path
from bson import ObjectId

DEFAULT_CONFIG = """grades	risk_band_type	test_types	subjects	risk_label	risk_level  min
all	academic	iReady_Math Mathematics High 4 1   
all	academic	iReady_ELA	ELA	High 4 1   
all	academic	iReady_Math	Mathematics High 4 2   
all	academic	iReady_ELA	ELA	High 4 2   
all	academic	iReady_Math	Mathematics Medium 2 3   
all	academic	iReady_ELA	ELA Medium  2 3   
all	academic	iReady_Math	Mathematics Medium  2 4   
all	academic	iReady_ELA	ELA Medium  2 4   
all	academic	iReady_Math	Mathematics Low  1 5   
all	academic	iReady_ELA	ELA	Low  1 5   

all	academic	NWEA	Mathematics High  4 1   
all	academic	NWEA	ELA High  4 1   
all	academic	NWEA	Mathematics High  4 2   
all	academic	NWEA	ELA High  4 2   
all	academic	NWEA	Mathematics Medium  2 3  
all	academic	NWEA	ELA Medium  2 3   
all	academic	NWEA	Mathematics Low  1 4  
all	academic	NWEA	ELA Low  1 4   
all	academic	NWEA	Mathematics	Low  1 5    
all	academic	NWEA	ELA	Low  1 5   

all academic  CAASPP__Smarter Balanced Summative for ELA  ELA High  4 2   
all academic  CAASPP__Smarter Balanced Summative for ELA  ELA Medium  2 3   
all academic  CAASPP__Smarter Balanced Summative for ELA  ELA Low  1 4    
all academic  CAASPP__Smarter Balanced Summative for ELA  ELA Low  1 5    

all academic  CAASPP__Smarter Balanced Summative for Mathematics  Mathematics High  4 2   
all academic  CAASPP__Smarter Balanced Summative for Mathematics  Mathematics Medium  2 3   
all academic  CAASPP__Smarter Balanced Summative for Mathematics  Mathematics Low  1 4    
all academic  CAASPP__Smarter Balanced Summative for Mathematics  Mathematics Low  1 5  

all academic  CAASPP__California Science Test (CAST)  Science High  4 2   
all academic  CAASPP__California Science Test (CAST)  Science Medium  2 3   
all academic  CAASPP__California Science Test (CAST)  Science Low  1 4    
all academic  CAASPP__California Science Test (CAST)  Science Low  1 5  

all academic  CAASPP__CAA for ELA  ELA High  4 2   
all academic  CAASPP__CAA for ELA  ELA Medium  2 3   
all academic  CAASPP__CAA for ELA  ELA Low  1 4    

all academic  CAASPP__CAA for Mathematics  Mathematics High  4 2   
all academic  CAASPP__CAA for Mathematics  Mathematics Medium  2 3   
all academic  CAASPP__CAA for Mathematics  Mathematics Low  1 4    

all academic  CAASPP__CAA for Science  Science High  4 2   
all academic  CAASPP__CAA for Science  Science Medium  2 3   
all academic  CAASPP__CAA for Science  Science Low  1 4    

all academic  CAASPP__California Spanish Assessment  Others High  4 2   
all academic  CAASPP__California Spanish Assessment  Others Medium  2 3   
all academic  CAASPP__California Spanish Assessment  Others Low  1 4  
"""

EDU_TEST_TYPES = ['common assessment', 'assessment']
ALL_TEST_TYPES = EDU_TEST_TYPES + [
    'iReady_ELA',
    'iReady_Math',
    'NWEA',
    'CAASPP__Smarter Balanced Summative for ELA',
    'CAASPP__Smarter Balanced Summative for Mathematics',
    'CAASPP__CAA for ELA',
    'CAASPP__CAA for Mathematics',
    'CAASPP__CAA for Science',
    'CAASPP__California Science Test (CAST)']
RBTYPES = ['academic', 'attendance']
ALL_GRADES = ['TK', 'K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'O']
ALL_SUBJECTS = [
  'Mathematics',
  'ELA',
  'Science',
  'Social Studies',
  'Computer Science',
  'Other Subjects',
]
BAND_LABELS = ['High', 'Medium', 'Low']

parser = ArgumentParser(description='Build SQL INSERT statement to add risk bands for given district', epilog="TIP: you can directly copy/paste TSV from/to google sheets.")
parser.add_argument('-d', '--district', help="district_id", type=str)
parser.add_argument('-t', '--tsv', help="print default config(in tsv) and exit", action='store_true')
parser.add_argument('-c', '--config', help='config file path, could be a csv or tsv. If not provided, default config will be used', required=False, type=Path)

def handle_args(args: Namespace):
    if args.tsv:
        print(DEFAULT_CONFIG)
        parser.exit()
    if not args.district:
        parser.error('district_id is required')

def difference(a, b):
    return list(set(a) - set(b))

def get_config(args: Namespace):
    if args.config:
      config_path = os.path.abspath(args.config)
      config_file = open(config_path)
    else:
      config_file = io.StringIO(DEFAULT_CONFIG)
    sniffer = csv.Sniffer()
    dialect = sniffer.sniff(config_file.readline())
    config_file.seek(0)
    reader = csv.DictReader(config_file, dialect=dialect)
    high, medium, low = 4, 2, 1
    for i, field in enumerate(reader.fieldnames):
        if field.startswith('high'):
            high = int(field.split('=')[1])
            reader.fieldnames[i] = 'high'
        elif field.startswith('medium'):
            medium = int(field.split('=')[1])
            reader.fieldnames[i] = 'medium'
        elif field.startswith('low'):
            low = int(field.split('=')[1])
            reader.fieldnames[i] = 'low'
    return {'district': args.district, 'high': high, 'medium': medium, 'low': low, 'input': reader}

def parse_rows(rows):
    for _row in rows:
        row = _row.copy()
        print(row)
        for key in row:
            if row[key]:
                row[key] = row[key].strip()
        if not row['grades']:
            return row
        if row['grades'] == 'all':
            row['grades'] = ALL_GRADES
        elif row['grades']:
            row['grades'] = [g.strip() for g in row['grades'].split(',')]
        else:
            row['grades'] = []
        if difference(row['grades'], ALL_GRADES):
            print(difference(row['grades'], ALL_GRADES))
            raise parser.error(f'grades should be one of {ALL_GRADES}.\nReceived: "{_row["grades"]}"')

        if row['subjects'] == 'all':
            row['subjects'] = ALL_SUBJECTS
        elif row['subjects']:
            row['subjects'] = [g.strip() for g in row['subjects'].split(',')]
        else:
            row['subjects'] = []
        if difference(row['subjects'], ALL_SUBJECTS):
            raise parser.error(f'subjects should be one of {ALL_SUBJECTS}.\nReceived: "{_row["subjects"]}"')

        if row['test_types'] == 'all':
            row['test_types'] = EDU_TEST_TYPES
        elif row['test_types']:
            row['test_types'] = [g.strip() for g in row['test_types'].split(',')]
        else:
            row['test_types'] = []
        if difference(row['test_types'], ALL_TEST_TYPES):
            raise parser.error(f'test_types should be one of {ALL_TEST_TYPES}.\nReceived: "{_row["test_types"]}"')

        if not row['risk_band_type'] in RBTYPES:
            raise parser.error(f'risk_band_type should be one of {RBTYPES}.\nReceived: "{_row["risk_band_type"]}"')
        
        # for band_label in BAND_LABELS:
        #     key = band_label.lower()
        #     min_max = row[key].split('-')
        #     if not row[key].strip():
        #         continue
        #     if len(min_max) == 1:
        #         ach_levels = min_max[0].split(',')
        #         for ach_level in ach_levels:
        #             row[key] = [int(ach_level.strip()), 'NULL']
        #             yield band_label, row
        #     elif len(min_max) == 2:
        #         row[key] = [int(v.strip()) for v in min_max]
        #         if row[key][0] > row[key][1]:
        #             raise parser.error(f'{key} min should be less than max.\nReceived: "{_row[key]}"')
        #         yield band_label, row

    

def build_insert_stmt(config):
    risk_band_id = str(ObjectId())
    sql = 'INSERT INTO "t_risk_band" ("risk_band_id", "district_id", "assessment_type", "risk_band_type", "grade", "subject", "band_label", "band_level", "min", "max", "risk_weightage", "risk_calc_method") VALUES\n'
    for band_label, row in parse_rows(config['input']):
        if not row['grades']: continue
        for grade in row['grades']:
            level = config[band_label.lower()]
            band_min = row[band_label.lower()][0]
            if row['risk_band_type'] == 'academic':
                for subject in row['subjects']:
                    for test_type in row['test_types']:
                        sql += f"('{risk_band_id}', '{config['district']}', '{test_type}', '{row['risk_band_type']}', '{grade}', '{subject}', '{band_label}', {level}, {band_min}, {NULL}, 1, 'ceil'),\n"
            elif row['risk_band_type'] == 'attendance':
                sql += f"('{risk_band_id}', '{config['district']}', '', '{row['risk_band_type']}', '{grade}', '', '{band_label}', {level}, {band_min}, {NULL}, 1, 'ceil'),\n"
    if sql.endswith(',\n'):
        sql = sql[:-2]
    sql += ';'
    return sql

def main():
    args = parser.parse_args()
    handle_args(args)
    config = get_config(args)
    parse_rows(config['input'])
    # sql = build_insert_stmt(config)
    # print(sql)

if __name__ == '__main__':
    main()