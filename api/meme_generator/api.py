from flask import (current_app, Blueprint, request,
                   url_for, redirect, send_from_directory, jsonify)
import os
from cartoonify import cartoonify
from werkzeug.utils import secure_filename
from .image_convert import convert_to_base64
from .image_watermark import add_watermark
from utils.handle_files import hash_filename, cleanup_files

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
        uploaded_file_path = os.path.join(
            app.config['UPLOAD_FOLDER'], filename)

        file.save(uploaded_file_path)
        file.close()

        cartoon_file = cartoonify(
            uploaded_file_path, app.config["DATASET_FOLDER"], os.path.join(app.config["MODEL_FOLDER"], "frozen_inference_graph.pb"))

        watermarked_file_path = hash_filename(
            location=app.config['UPLOAD_FOLDER'], ext="png")

        add_watermark(str(cartoon_file), os.path.join(
            app.root_path, "eu-compliant-watermark.png"), watermarked_file_path)

        cleanup_files([uploaded_file_path, cartoon_file])
        return jsonify(status=200, base64=convert_to_base64(str(watermarked_file_path)))
