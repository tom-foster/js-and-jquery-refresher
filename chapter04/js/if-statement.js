//if statement
//tf 31/07/16

var score = 75; //score
var message; //message

if (score >= 50) { //if score is 50 or higher
  message = 'Congratulations!';
  message += ' Proceed to the next rounds.';
}

var el = document.getElementById('answer');
el.textContent = message;
