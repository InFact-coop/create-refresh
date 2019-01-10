from zlib import adler32
from time import time
from random import randint
from datetime import datetime
from os import path, remove


def hash_filename(location, ext):
    hashed = adler32(str(time() * randint(1, 10)))
    date = datetime.utcnow().strftime("%d%m%Y-%H%M%S")
    return path.join(location, str(hashed) + "-" + str(date) + "." + ext)


def cleanup_files(files):
    for file in files:
        if path.exists(str(file)):
            remove(str(file))
