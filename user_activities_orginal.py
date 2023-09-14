from email.header import Header
from fileinput import filename
import sys
import json
import time
import os
import re
import pandas as pd
from pymongo import MongoClient
from bson import ObjectId

debug = False
#debug=True

#secret_name = str(os.environ['SECRET_NAME'])


def get_par(par, lines):
    for line in lines:
        if re.search(par, line):
            value = line.split('=')[1]
            value = re.sub("'", '', value)
            value = re.sub(" ", '', value)
            value = re.sub("\n", '', value)
    return value


def openConnection():
    print(">>> Open LOCAL connection")
    cr = '.cred'
    with open(cr) as f:
        lines = f.readlines()

    mongo_conn = get_par('mongo', lines)
    #print("Mongo C:", mongo_conn)
    return mongo_conn


def make_ObjectId(idx):  # needed for Mongo search
    return ObjectId(idx)


def get_device_info(row_in):
    #{'deviceType': 'MOBILE', 'browserType': 'Chrome', 'browserVersion': '86.0.4240.93', 'os': 'OS X', 'platform': 'iPad', 'source': 'Mozilla/5.0 (iPad; CPU OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/86.0.4240.93 Mobile/15E148 Safari/604.1', 'ip': '86.96.89.13'}
    #print("map_it: row_in", row_in, type(row_in))
    device_info = row_in['clientDetails']
    if type(device_info) not in (list, tuple, dict, str):
        return pd.Series(['N/A', 'N/A', 'N/A', 'N/A', 'N/A'])
    if 'deviceType' in device_info:
        deviceType = device_info['deviceType']
    else:
        deviceType = 'N/A'

    if 'source' in device_info:
        deviceVersion = device_info['source']
    else:
        deviceVersion = 'N/A'
    if 'browserVersion' in device_info:
        browserVersion = device_info['browserVersion']
    else:
        browserVersion = 'N/A'

    if 'browserType' in device_info:
        browserType = device_info['browserType']
    else:
        browserType = 'N/A'
    if 'ip' in device_info:
        IP = device_info['ip']
    else:
        IP = 'N/A'
    return pd.Series(
        [deviceType, deviceVersion, browserType, browserVersion, IP])


os.environ["TZ"] = "US/Pacific"


def format_ts(r):
    ts = r['updatedAt']
    t = float(ts) / 1000
    y = time.strftime('%m/%d/%y %H:%M:%S %Z', time.localtime(t))
    return y


def get_activity_id(r):
    # two cases: 'LOGIN' 'ASSIGNMENT'
    if 'activityType' not in r:
        return ''
    activity_type = r['activityType']
    if activity_type == 'ASSIGNMENT':
        if 'assignmentId' in r:
            return str(r['assignmentId'])
        return ''
    elif (activity_type == 'LOGIN') or (activity_type == 'LOGOUT'):
        if 'sessionId' in r:
            return str(r['sessionId'])
        return ''
    return ''


def proccessUserActivitiesByLimit(filename, Mongodb, skip, page_size=10000):
    print("Now getting acvities from MongoDB...")
    # activities = Mongodb.UserActivityLog.find({"districtId" : make_ObjectId(district_id)})
    # This will only pull records from Aug 1 2021 and newer
    # activities = Mongodb.UserActivityLog.find({"districtId" : make_ObjectId(district_id), "createdAt" : { "$gt" : 1627804861000}})
    # activities = Mongodb.UserActivityLog.find({})
    activities = Mongodb.UserActivityLog.find().skip(skip).limit(page_size)
    listAct = list(activities)
    if not listAct:
        return False
    UAL_df = pd.DataFrame(listAct)

    print("Number of rows:", len(UAL_df))
    print("Memory usage initial: MB", UAL_df.memory_usage().sum() / (1024**2))
    # move earlier to do the cleanup of unecessary columns:
    UAL_df.drop(columns=[
        '_id', '__v', 'testActivityId', 'districtId', 'createdAt', 'username',
        'groupId'
    ],
                inplace=True)
    UAL_df[['activityType', 'activityAction',
            'role']] = UAL_df[['activityType', 'activityAction',
                               'role']].astype('category')  # reduces memory
    print("Memory usage: MB", UAL_df.memory_usage().sum() / (1024**2))

    UAL_df['Partner ID'] = 'Snapwiz'
    UAL_df['Product ID'] = 'Edulastic'
    #UAL_df.to_csv('1.csv')
    UAL_df[[
        'Device Type', 'Device Version', 'Browser Type', 'Browser Version',
        'IP'
    ]] = UAL_df.apply(get_device_info, axis=1)
    UAL_df['Time Stamp'] = UAL_df.apply(format_ts, axis=1)
    UAL_df['Activity ID'] = UAL_df.apply(get_activity_id, axis=1)

    UAL_df.rename(columns={
        "sisId": "User ID",
        "schoolId": "School ID",
        "activityType": "Activity Type",
        "activityAction": "Activity Action type"
    },
                  inplace=True)

    UAL_df = UAL_df[[
        'Partner ID', 'Product ID', 'User ID', 'School ID', 'Device Type',
        'Device Version', 'Browser Type', 'Browser Version', 'IP',
        'Activity Type', 'Activity Action type', 'Activity ID', 'Time Stamp'
    ]]

    if skip:
        UAL_df.to_csv(filename, mode='a', index=False, header=False)
    else:
        UAL_df.to_csv(filename, index=False)
    return True


def getUserActivities(district_id, date_par, data_batch_size=100000):
    print("Running getUserActivities for : district_id", district_id,
          ", date_par:", date_par)
    mongo_conn = openConnection()
    mongo_Client = MongoClient(mongo_conn)
    Mongodb = mongo_Client.get_default_database()
    page_size = data_batch_size
    page_num = 0
    filename = '''UAL_%s.csv''' % time.time_ns()
    while True:
        skip = page_size * page_num
        proceedNext = proccessUserActivitiesByLimit(filename, Mongodb, skip,
                                                    page_size)
        if not proceedNext:
            break
        page_num += 1
    mongo_Client.close()
    return True