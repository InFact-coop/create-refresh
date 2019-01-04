from flask import (current_app, Blueprint, request, jsonify)
from utils import Mailchimp

app = current_app
bp = Blueprint("mailchimp", __name__)


@bp.route("/subscribe", methods=['POST'])
def subscribe():
    mc = Mailchimp(app.config["MAILCHIMP_API_KEY"],
                   app.config["MAILCHIMP_LIST"])
    new_user = {
        "email": request.form.get("email"),
        "fname": request.form.get("fname"),
        "lname": request.form.get("lname"),
        "country": request.form.get("country"),
        "social": request.form.get("social"),
        "ip": request.form.get("ip"),
    }
    response = mc.subscribe_list_member(new_user)
    print(response)
    return jsonify(status=response["status"])
