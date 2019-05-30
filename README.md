# colorpicker

This is a practice project on basic front-end and some backend technologies.

There are 3 sliders for RED, GREEN and BLUE colours with scale from 0 to 255 (as usual). Sliding them mixes the 3 primary colours 
to show the generated colour in the background. Also RGB-code and HEX-code of the generated colour is displayed.

The CSS is made screen-size compatible but some features can run only in Google Chrome 😢😢.

We are using flask for backend.

The genarated color can be downloaded as PNG file with name containing hex code.

uWSGI server is used which will also periodically delete the generated PNG files using timer.
