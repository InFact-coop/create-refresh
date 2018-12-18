# TODO: TRIM DEPENDENCIES

from __future__ import division
import click
from app.workflow import Workflow
from app.drawing_dataset import DrawingDataset
from app.image_processor import ImageProcessor, tensorflow_model_name, model_path
from app.sketch import SketchGizeh
from pathlib import Path
from os.path import join
import logging
import datetime
from remi import start
import importlib
import sys
import time


root = Path(__file__).parent

# init objects
dataset = DrawingDataset(
    str(root / 'downloads/drawing_dataset'), str(root / 'app/label_mapping.jsonl'))
imageprocessor = ImageProcessor(str(model_path),
                                str(root / 'app' / 'object_detection' /
                                    'data' / 'mscoco_label_map.pbtxt'),
                                tensorflow_model_name)

# configure logging
logging_filename = datetime.datetime.now().strftime('%Y%m%d-%H%M.log')
logging_path = Path(__file__).parent / 'logs'
if not logging_path.exists():
    logging_path.mkdir()
logging.basicConfig(format='%(levelname)s:%(message)s', level=logging.DEBUG,
                    filename=str(Path(__file__).parent / 'logs' / logging_filename))


def cartoonify(path):
    app = Workflow(dataset, imageprocessor)
    app.setup()
    path = Path(path)
    if str(path) != '.' or 'exit':
        app.process(str(path), top_x=3)
        return app.save_results()
    else:
        app.close()
        return "Error"


if __name__ == '__main__':
    path = Path(input("enter the filepath of the image to process:"))
    cartoonify(path)
    sys.exit()
