import PIP import Image
from flask import Blueprint, flash, request, render_template, url_for, send_from_directory, current_app

def create_png(hex):
    im = Image.new('RGB', (50, 40), hex)

bp = Blueprint('views', __name__, url_prefix = '/')

# Serves the root html file
@bp.route('/')
def root():
    return render_template('index.html')

@bp.route('/get_image/', methods = ['POST',])
def send_image():
    if request.method == 'POST':
        color_code = request.args.get('hex_code')
