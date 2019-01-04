import os
import json
from dotenv import load_dotenv
from datetime import datetime
import requests
from requests.auth import HTTPBasicAuth
load_dotenv(dotenv_path=".env", verbose=True)


class Mailchimp(object):
    def __init__(self, api_key, list_id):
        self.api_key = api_key
        self.datacenter = self.__get_datacenter(api_key)
        self.list_id = list_id

    def __get_datacenter(self, api_key):
        return api_key.split("-")[1]

    def __get_time(self):
        """Create a YYYY-MM-DD HH:MM:SS string from current UTC time"""
        # Mailchimp 3.0 API does not support ISO 8601 input but returns time in this format
        return datetime.utcnow().strftime("%Y-%m-%d %X")

    def subscribe_list_member(self, user):
        payload = {
            "email_address": user["email"],
            "status": "subscribed",
            "merge_fields": {
                "FNAME": user["fname"],
                "LNAME": user["lname"],
                "SOCIAL": user["social"]
            },
            "ip_signup": user["ip"],
            "timestamp_signup": self.__get_time(),
            "location": {
                "country_code": user["country"]
            }
        }
        r = requests.post("https://{}.api.mailchimp.com/3.0/lists/{}/members/".format(self.datacenter, self.list_id), auth=("anystring", self.api_key), data=json.dumps(payload))
        return r.json()

mc = Mailchimp(os.getenv("MAILCHIMP_API_KEY"), os.getenv("MAILCHIMP_LIST"))
print(mc.api_key)
print(mc.datacenter)
print(mc.list_id)
new_user = {
    "email": "test@flask.com",
    "fname": "Flask",
    "lname": "Test",
    "country": "UK",
    "social": "testy",
    "ip": "192.168.0.1",
}
print(new_user)
response = mc.subscribe_list_member(new_user)
print(response)
