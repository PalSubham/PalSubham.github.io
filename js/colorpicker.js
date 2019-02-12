$(window).ready(function () {
	function hex_pad(value)  {
		let hex = value.toString(16);
		return (hex.length < 2) ? "0"+hex : hex;
	}
	
	function config_slider() {
		let red_val = parseInt($("#slider-red").val(), 10);
		let green_val = parseInt($("#slider-green").val(), 10);
		let blue_val = parseInt($("#slider-blue").val(), 10);
		
		let modified_red = (((red_val/255)*94)+3).toString();
		let modified_green = (((green_val/255)*94)+3).toString();
		let modified_blue = (((blue_val/255)*94)+3).toString();
		
		$("#red-color").css("background", "linear-gradient(to right, red " + modified_red + "%, white " + modified_red + "% 100%)");
		$("#green-color").css("background", "linear-gradient(to right, green " + modified_green + "%, white " + modified_green + "% 100%)");
		$("#blue-color").css("background", "linear-gradient(to right, blue " + modified_blue + "%, white " + modified_blue + "% 100%)");
		
		$("#super-container").css("background", "linear-gradient(to top, #" + hex_pad(red_val) + hex_pad(green_val) + hex_pad(blue_val) + " 60%, #b0e0e6)");
		$("#container").css("border-color", "#" + hex_pad(255 - red_val) + hex_pad(255 - green_val) + hex_pad(255 - blue_val));
		$("td").css("background-color", "rgba(" + red_val.toString() + ", " + green_val.toString() + ", " + blue_val.toString() + ", 0.3)");
		$(".circle").css("box-shadow", "0px 0px 1px 0px #" + hex_pad(red_val) + hex_pad(green_val) + hex_pad(blue_val));
		
		$("#hex-value").html("#" + hex_pad(red_val).toUpperCase() + hex_pad(green_val).toUpperCase() + hex_pad(blue_val).toUpperCase());
		$("#rgb-value").html("(" + red_val.toString() + ", " + green_val.toString() + ", " + blue_val.toString() + ")");
		
		return;
	}
	
	$('input[type="range"]').on("input", function (event) {config_slider();});
	$('input[type="range"]').on("input", function (event) {config_slider();});
});