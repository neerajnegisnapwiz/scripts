import sys
import json
import time
import os

secret_name = 'local'
from user_activities_orginal import getUserActivities



district_id='5f086a45c92fb82b069bc6c9' # actual
date_par='N/A'
data_batch_size=200000
status=getUserActivities(district_id,date_par,data_batch_size)
if status:
	print("Finished Cleanly")
else :
	print("Did not finish. Error encountered!")

