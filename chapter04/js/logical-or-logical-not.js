//showing the logical or and logical no
//tf 31/07/16

var score1 = 8; //round 1 score
var score2 = 9; //round 2 score

var pass1 = 7; //round 1 pass mark
var pass2 = 9; //round 1 pass mark

// check whter user passed one of the two rounds, store result in variable
var minPass = ((score1 >= pass1) || (score2 >= pass2));

//Create message
var message = 'Resit required: ' + !(minPass);

//write the message into the page
var el = document.getElementById('answer');
el.textContent = message;
