import os
from flask import Flask

def create_app():
    app = Flask(__name__, instance_relative_config = True)

    app.config.from_pyfile('config.py', silent = True)
    
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    
    from . import views
    app.register_blueprint(views.bp)

    return app