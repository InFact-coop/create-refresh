import logging
from meme_generator import create_app

logging.basicConfig(level=logging.INFO)
application = create_app()

if __name__ == '__main__':
    application.run()
