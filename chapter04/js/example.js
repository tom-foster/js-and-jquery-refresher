//putting together the examples in chapter04
//tf 03/08/16

var table = 3; //unit of table
var operator = 'addition'; //tyoe of calculation (defaults to addition)
var i = 1; //set counter to 1
var message = ''; //message

if (operator === 'addition') { //if the operator variable says addition
	while (i < 11) { //while counter is less than 11
		message += i + ' + ' + table + ' = ' + (i + table) +'<br />'; //calculation
		i++; //add 1 to the counter
	}
} else { //otherwise
	while (i < 11) { //while counter is less than 11
		message += i + ' x ' + table + ' + ' (i * table) + '<br />'; //calculation
		i++ //add 1 to the counter
	}
}

//write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = message;