var f = prompt('what\'s the weather like today? (degrees farenheit)');
var c = ((f-32)*5)/9;
if (isNaN(c)) {
	alert('that\'s not a temperature i recognize. please reload the page and stop goosing me around.');
} else {
alert('Well In Canada It\'s '+ c.toFixed(1) + ' Degrees Celsius. Goodbye for now.');
}