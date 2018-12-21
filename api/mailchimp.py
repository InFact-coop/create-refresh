import os
from dotenv import load_dotenv
import requests
load_dotenv(dotenv_path=".env", verbose=True)


class Mailchimp:
    def __init__(self, api_key):
        self.api_key = api_key
        self.datacenter = self.__get_datacenter(api_key)

    def __get_datacenter(self, api_key):
        return api_key.split("-")[1]


mc = Mailchimp(os.getenv("MAILCHIMP_API_KEY"))
print(mc.api_key)
print(mc.datacenter)
