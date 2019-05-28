function hex_pad(value)
{
	let hex = value.toString(16);
	return (hex.length < 2) ? ("0" + hex) : hex;
}