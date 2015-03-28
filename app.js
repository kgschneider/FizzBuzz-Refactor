var i = 1;
var number = prompt("Please enter a number!");
var x = parseFloat(number);

function fizzBuzz(x) {

	
	if ($.isNumeric(number) == false) {
		alert("That is not an acceptable number!  Please try again!");
	}

	for (i; i <= x; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			$('body').append("fizzbuzz" + "<br>");
		}
		else if (i % 5 == 0) {
			$('body').append("buzz" + "<br>");
		}
		else if (i % 3 == 0) {
			$('body').append("fizz" + "<br>");
		}
		else {
			$('body').append(i + "<br>");
		}
	}

}; 
