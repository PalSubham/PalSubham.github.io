from colorpicker import create_app
import uwsgi
import os

media_folder = './media'

def remove_png(num):
    for file in os.listdir(media_folder):
        file_path = os.path.join(media_folder, file)
        try:
            if os.path.exists(file_path) and os.path.isfile(file_path):
                os.unlink(file_path)
        except:
            continue
    return

uwsgi.register_signal(26, 'mule', remove_png)
uwsgi.add_timer(26, 1800)

app = create_app()

if __name__ == '__main__':
    app.run()