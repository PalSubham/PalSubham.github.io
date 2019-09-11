from PIL import Image
import os
from io import BytesIO
from flask import Blueprint, request, render_template, current_app, send_from_directory, send_file


bp = Blueprint('views', __name__, url_prefix = '/')

# Serves the root html file
@bp.route('/', methods = ['GET',])
def root():
	return render_template('index.html')


# For favicon.ico
@bp.route('/favicon.ico', methods = ['GET',])
def favicon():
	return send_from_directory(os.path.join(os.path.join(current_app.root_path, 'static'), 'icon'), 'favicon.ico', mimetype = 'image/x-icon')


# Find for PNG, if not found create one and serve it with some HTTP headers
@bp.route('/get_image', methods = ['GET',])
def send_image():
	color_code = request.args.get('hex_code')
	img_io = BytesIO()
	img = Image.new('RGB', (60, 30), color_code)
	img.save(img_io, format = 'PNG', quality = 70)
	img_io.seek(0)
	response = send_file(img_io, as_attachment = True, attachment_filename = color_code + '.png', mimetype = 'image/png')
	return response
