import os

# Base directory of the app
BASE_DIR = os.path.dirname(os.path.dirname(__file__))

# Root directory for media files
MEDIA_ROOT = os.path.join(BASE_DIR, 'media/')

TEMPLATES_AUTO_RELOAD = True

SECRET_KEY = b'\x7f\xdf\r2\x04\x1f\xcd\x15%D0Fw\xfc#\xe6\xb8\xba\x1c\x9b\xdau\x10\xd0'