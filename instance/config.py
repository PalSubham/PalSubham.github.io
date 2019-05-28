import os

# Base directory of the app
BASE_DIR = os.path.dirname(os.path.dirname(__file__))

# Root directory for media files
MEDIA_ROOT = os.path.join(BASE_DIR, 'media/')

TEMPLATES_AUTO_RELOAD = True