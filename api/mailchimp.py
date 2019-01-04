import os
import json
from dotenv import load_dotenv
import requests
from requests.auth import HTTPBasicAuth
load_dotenv(dotenv_path=".env", verbose=True)


class Mailchimp:
    def __init__(self, api_key, list_id):
        self.api_key = api_key
        self.datacenter = self.__get_datacenter(api_key)
        self.list_id = list_id

    def __get_datacenter(self, api_key):
        return api_key.split("-")[1]

    def subscribe_list_member(self, user):
        parsed_data = self.parse_user_input(user)
        payload = {
            "email_address": parsed_data["email"],
            "status": "subscribed",
            "merge_fields": {
                "FNAME": parsed_data["fname"],
                "LNAME": parsed_data["lname"],
                "ADDRESS": {
                    "country": parsed_data["country"]
                },
                "SOCIAL": parsed_data["social"]
            },
            "ip_signup": parsed_data["ip"],
            "timestamp_signup": parsed_data["timestamp"],
            "location": {
                "country_code": parsed_data["country"]
            }
        }
        r = requests.post("https://{}.api.mailchimp.com/3.0/lists/{}/members/".format(self.datacenter, self.list_id), auth=("anystring", self.api_key), data=json.dumps(payload))
        return r.json()

mc = Mailchimp(os.getenv("MAILCHIMP_API_KEY"), os.getenv("MAILCHIMP_LIST"))
print(mc.api_key)
print(mc.datacenter)
print(mc.list_id)
