//the use of the logical and operator
//tf 31/07/16
var score1 = 8; //Round 1 score
var score2 = 9; //Round 2 score

var pass1 = 6; // Round 1 pass mark
var pass2 = 7; //Round 2 pass mark

//Check whether user passed both rounds, store result in variable
var passBoth = (score1 >=  pass1) && (score2 >= pass2);

//Create message
var message = 'Both rounds passed: ' + passBoth;

//Write the message into the page1
var el = document.getElementById('answer');
el.textContent = message;
