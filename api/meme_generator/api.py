from flask import (current_app, Blueprint, request, url_for, redirect)
import os
from werkzeug.utils import secure_filename

# import application context and declare new blueprint
app = current_app
bp = Blueprint('api', __name__)

# create allowed_file helper function - will only upload allowed extensions for app


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']


@bp.route("/upload", methods=('GET', 'POST'))
def upload():
    """Validate and upload a file uploaded to the server"""
    if request.method == 'POST':
        if 'file' not in request.files:
            return "No file!"

        file = request.files['file']

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return redirect(url_for('uploaded_file', filename=filename))

    return "TODO: upload files!"
