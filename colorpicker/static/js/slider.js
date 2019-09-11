$(window).ready(function () {

	function config_slider()
	{
		const red_val = parseInt($("#slider-red").val(), 10);
		const green_val = parseInt($("#slider-green").val(), 10);
		const blue_val = parseInt($("#slider-blue").val(), 10);

		const modified_red = (((red_val/255)*94)+3).toString();
		const modified_green = (((green_val/255)*94)+3).toString();
		const modified_blue = (((blue_val/255)*94)+3).toString();
		
		$("#red-color").css("background", "linear-gradient(to right, red " + modified_red + "%, white " + modified_red + "% 100%)");
		$("#green-color").css("background", "linear-gradient(to right, green " + modified_green + "%, white " + modified_green + "% 100%)");
		$("#blue-color").css("background", "linear-gradient(to right, blue " + modified_blue + "%, white " + modified_blue + "% 100%)");
		
		if(window.matchMedia("only screen and (max-width: 768px) and (orientation: portrait)").matches)
		{
			$("body").css("background", "linear-gradient(to top, #" + hex_pad(red_val) + hex_pad(green_val) + hex_pad(blue_val) + " 80%, #b0e0e6)");
		}
		else if(window.matchMedia("only screen and (max-width: 768px) and (orientation: landscape)").matches)
		{
			$("body").css("background", "linear-gradient(to top, #" + hex_pad(red_val) + hex_pad(green_val) + hex_pad(blue_val) + " 50%, #b0e0e6)");
		}
		else
		{
			$("body").css("background", "linear-gradient(to top, #" + hex_pad(red_val) + hex_pad(green_val) + hex_pad(blue_val) + " 55%, #b0e0e6)");
		}
		
		$("#container").css("border-color", "#" + hex_pad(255 - red_val) + hex_pad(255 - green_val) + hex_pad(255 - blue_val));
		$(".circle").css("box-shadow", "0px 0px 1px 0px #" + hex_pad(red_val) + hex_pad(green_val) + hex_pad(blue_val));
		
		$("#hex-value").html("#" + hex_pad(red_val).toUpperCase() + hex_pad(green_val).toUpperCase() + hex_pad(blue_val).toUpperCase());
		$("#rgb-value").html("(" + red_val.toString() + ", " + green_val.toString() + ", " + blue_val.toString() + ")");
		$('input[type=hidden]').val("#" + hex_pad(red_val).toUpperCase() + hex_pad(green_val).toUpperCase() + hex_pad(blue_val).toUpperCase());
		
		return;
	}
	
	$('input[type="range"]').on("input", function (event) {config_slider();});
	$('input[type="range"]').on("change", function (event) {config_slider();});
});