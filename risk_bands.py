import csv, os, io
from argparse import ArgumentParser, Namespace
from pathlib import Path
from bson import ObjectId

DEFAULT_CONFIG = """grades	risk_band_type	test_types	subjects	high=4	medium=2	low=1

6	academic	iReady_Math	Mathematics	1		
6	academic	iReady_Math	Mathematics	2		
6	academic	iReady_Math	Mathematics		3	
6	academic	iReady_Math	Mathematics		4	
6	academic	iReady_Math	Mathematics			5

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
parser.add_argument('-d', '--district', help="district_id", type=str, default='5dce67dac9607d00070ad888')
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

def parse_row(_row):
    row = _row.copy()
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
    
    # for key in ['high', 'medium', 'low']:
        # modify to take single value
        # row[key] = [int(v.strip()) for v in row[key].split('-')]
        # if row[key][0] > row[key][1]:
        #     raise parser.error(f'{key} min should be less than max.\nReceived: "{_row[key]}"')
    
    return row
    

def build_insert_stmt(config):
    risk_band_id = str(ObjectId())
    sql = 'INSERT INTO "t_risk_band" ("risk_band_id", "district_id", "assessment_type", "risk_band_type", "grade", "subject", "band_label", "band_level", "min", "max") VALUES\n'
    for row in config['input']:
        row = parse_row(row)
        if not row['grades']: continue
        for grade in row['grades']:
            for band_index in range(3):
                band_label = BAND_LABELS[band_index]
                level = config[band_label.lower()]
                band_min = row[band_label.lower()]
                band_max = 'null'
                if (band_min):
                  if row['risk_band_type'] == 'academic':
                      for subject in row['subjects']:
                          for test_type in row['test_types']:
                              sql += f"('{risk_band_id}', '{config['district']}', '{test_type}', '{row['risk_band_type']}', '{grade}', '{subject}', '{band_label}', {level}, {band_min}, {band_max}),\n"
                  elif row['risk_band_type'] == 'attendance':
                      sql += f"('{risk_band_id}', '{config['district']}', '', '{row['risk_band_type']}', '{grade}', '', '{band_label}', {level}, {band_min}, {band_max}),\n"
    if sql.endswith(',\n'):
        sql = sql[:-2]
    sql += ';'
    return sql

def main():
    args = parser.parse_args()
    handle_args(args)
    config = get_config(args)
    sql = build_insert_stmt(config)
    print(sql)

if __name__ == '__main__':
    main()