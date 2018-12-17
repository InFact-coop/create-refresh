from flask import Blueprint

bp = Blueprint('api', __name__, url_prefix='/api')


@bp.route("/upload", methods=('GET', 'POST'))
def upload():
    return "TODO: Upload Files!"
