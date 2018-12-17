from flask import (current_app, Blueprint, request,
                   url_for, redirect, send_from_directory)
import os
from cartoonify import cartoonify
from werkzeug.utils import secure_filename

# import application context and declare new blueprint
app = current_app
bp = Blueprint('api', __name__)

# create allowed_file helper function - will only upload allowed extensions for app


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']


@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'],
                               filename)


@bp.route("/test")
def test():
    """Testing :) """
    path = os.path.join(
        app.instance_path, app.config['UPLOAD_FOLDER'], "corbyn.jpg")
    image = cartoonify(path)
    print(image)
    return "Test complete"


@bp.route("/upload", methods=('GET', 'POST'))
def upload():
    """Validate and upload a file uploaded to the server"""
    if request.method == 'POST':
        if 'file' not in request.files:
            return "No file!"

        file = request.files['file']

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            path = os.path.join(
                app.instance_path, app.config['UPLOAD_FOLDER'], filename)
            print(path)
            print("Going to upload the file now!")

            file.save(path)
            file.close()
            cartoon_path = cartoonify(path)

            return redirect(url_for('uploaded_file',
                                    filename=cartoon_path))

    return "TODO: upload files!"
