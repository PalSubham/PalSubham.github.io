import os
from flask import Flask
from flask_wtf.csrf import CSRFProtect
from .views import bp, favicon

csrf = CSRFProtect()

def create_app():
    app = Flask(__name__, instance_relative_config = True)
    app.config.from_pyfile('config.py', silent = True)

    csrf.exempt(favicon)
    csrf.init_app(app)
    
    try:
        os.makedirs(app.config['MEDIA_ROOT'])
    except OSError:
        pass
    
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    
    app.register_blueprint(bp)

    return app