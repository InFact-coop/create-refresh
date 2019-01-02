from flask import (current_app, Blueprint, request,
                   url_for, redirect, send_from_directory, jsonify)
import os
from cartoonify import cartoonify
from werkzeug.utils import secure_filename

from .image_convert import convert_to_base64
from .image_watermark import add_watermark

# import application context and declare new blueprint
app = current_app
bp = Blueprint('api', __name__)


def allowed_file(filename):
    """Check file extension being uploaded is allowed within the application factory setup"""
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']


@bp.route("/upload", methods=['POST'])
def upload():
    """Validate and upload a file uploaded to the server via POST"""

    if 'file' not in request.files:
        return "No file!"

    file = request.files['file']

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        path = os.path.join(
            app.instance_path, app.config['UPLOAD_FOLDER'], filename)
        print("Going to upload the file now!")

        file.save(path)
        file.close()
        cartoon_path = cartoonify(path)
        watermark_path = os.path.join(str(cartoon_path) + "_watermark.png")
        add_watermark(str(cartoon_path), os.path.join(
            app.root_path, "eu-compliant-watermark.png"), watermark_path)

        print("Going to send a response now!")
        return jsonify(status=200, base64=convert_to_base64(str(watermark_path)))


@bp.route("/signup", methods=['POST'])
def signup():
    print("here is the data: ")
    print(request)
