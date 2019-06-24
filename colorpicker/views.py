from PIL import Image
import os
from flask import Blueprint, request, render_template, current_app, send_from_directory, Response
from werkzeug.exceptions import NotFound

# Create the PNG from the given hex code
def create_png(hex):
	img = Image.new('RGB', (60, 30), hex)
	image_name = os.path.join(current_app.config['MEDIA_ROOT'], hex + '.png')
	img.save(image_name)
	return

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
@bp.route('/get_image', methods = ['POST',])
def send_image():
	if request.method == 'POST':
		color_code = request.form['hex_code']
		try:
			response = send_from_directory(current_app.config['MEDIA_ROOT'], color_code + '.png', as_attachment = True, mimetype = 'image/png')
			response.headers['png_download'] = 'SUCCESS...PRESS OK TO DOWNLOAD'
			response.headers['name_of_file'] = str(color_code + '.png')
			response.headers['if_success'] = '1'
		except NotFound:
			try:
				create_png(color_code)
				response = send_from_directory(current_app.config['MEDIA_ROOT'], color_code + '.png', as_attachment = True, mimetype = 'image/png')
				response.headers['png_download'] = 'SUCCESS...PRESS OK TO DOWNLOAD'
				response.headers['name_of_file'] = str(color_code + '.png')
				response.headers['if_success'] = '1'
			except:
				response = Response(status = 200)
				response.headers['png_download'] = 'ERROR...TRY AGAIN'
				response.headers['if_success'] = '0'
		finally:
			return response
