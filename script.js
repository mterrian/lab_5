/*var f = prompt('what\'s the weather like today? (degrees farenheit)');
var c = ((f-32)*5/9;
if (isNaN(c)) {
	alert('that\'s not a temperature i recognize. please reload the page and stop goosing me around.');
} else {
alert('Well In Canada It\'s '+ c.toFixed(1) + ' Degrees Celsius. Goodbye for now.');
}

//writing myself a note to remember parseInt and wrapping prompt w number

var f = prompt('weather')

var c = function toCelsius(f) {
	return (f-32) * (5/9);
}

alert(c); */

function convertTemp(t,d) {
  if(d==="F") {
    return ((t-32) * (5/9)).toFixed(2) + " degrees C";
  } else if (d==="C") {
    return (t*9/5 + 32).toFixed(2) + " degrees F";
  } 
}
var temp = prompt("Enter The Temperature ");
var deg = prompt("C or F");
var degree = deg.toUpperCase();
alert(convertTemp(temp, degree));