from PIL import Image
import os
from io import BytesIO
from flask import Blueprint, request, render_template, current_app, send_from_directory, make_response, Response


bp = Blueprint('views', __name__, url_prefix = '/')

# Serves the root html file
@bp.route('/', methods = ['GET',])
def root():
	return render_template('index.html')

# Generates the requested PNG and stores it in memory as buffer and sends it as attachment
@bp.route('/get_image', methods = ['GET',])
def send_image():
	color_code = request.args.get('hex_code')
	buffer = BytesIO()
	img = Image.new('RGB', (60, 30), color_code)
	img.save(buffer, format = 'PNG', quality = 70)
	buffer.seek(0)
	response = make_response(Response(buffer, mimetype = 'image/png', direct_passthrough = True))
	response.headers.set('Content-Type', 'image/png')
	response.headers.set('Content-Disposition', 'attachment', filename = color_code + '.png')
	return response
