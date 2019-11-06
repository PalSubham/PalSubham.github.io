const hex_pad = (value) => {
	let hex = value.toString(16);
	return (hex.length < 2) ? ('0' + hex) : hex;
}

const sliderChanged = () => {
	const red_val = parseInt($('#slider-red').val(), 10);
	const green_val = parseInt($('#slider-green').val(), 10);
	const blue_val = parseInt($('#slider-blue').val(), 10);

	const modified_red = (((red_val/255)*94)+3).toString();
	const modified_green = (((green_val/255)*94)+3).toString();
	const modified_blue = (((blue_val/255)*94)+3).toString();

	const hex_col = '#' + hex_pad(red_val) + hex_pad(green_val) + hex_pad(blue_val);
	const show_hex = '#' + hex_pad(red_val).toUpperCase() + hex_pad(green_val).toUpperCase() + hex_pad(blue_val).toUpperCase()
	
	$('#red-color').css('background', 'linear-gradient(to right, red ' + modified_red + '%, white ' + modified_red + '% 100%)');
	$('#green-color').css('background', 'linear-gradient(to right, green ' + modified_green + '%, white ' + modified_green + '% 100%)');
	$('#blue-color').css('background', 'linear-gradient(to right, blue ' + modified_blue + '%, white ' + modified_blue + '% 100%)');
	
	if(window.matchMedia('only screen and (max-width: 768px) and (orientation: portrait)').matches)
	{
		$('body').css('background', 'linear-gradient(to top, ' + hex_col + ' 80%, #b0e0e6)').css('background-repeat', 'no-repeat').css('background-attachment', 'fixed');
	}
	else if(window.matchMedia('only screen and (max-width: 768px) and (orientation: landscape)').matches)
	{
		$('body').css('background', 'linear-gradient(to top, ' + hex_col + ' 50%, #b0e0e6)').css('background-repeat', 'no-repeat').css('background-attachment', 'fixed');
	}
	else
	{
		$('body').css('background', 'linear-gradient(to top, ' + hex_col + ' 55%, #b0e0e6)').css('background-repeat', 'no-repeat').css('background-attachment', 'fixed');
	}
	
	$('#container').css('border-color', '#' + hex_pad(255 - red_val) + hex_pad(255 - green_val) + hex_pad(255 - blue_val));
	$('.circle').css('box-shadow', '0px 0px 1px 0px ' + hex_col);
	
	$('#hex-value').html(show_hex);
	$('#rgb-value').html('(' + red_val.toString() + ', ' + green_val.toString() + ', ' + blue_val.toString() + ')');
	$('input[type=hidden]').val(show_hex);
	
	return;
}