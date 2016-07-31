//if statement calling a function
// tf 31/07/16

var score = 75; //score
var message = ''; //message

function congratulate() {
  message += 'Congratulations! ';
}

if (score >= 50) { //if score is 50 or more
  congratulate();
  message += 'Proceed to the next round.';
}

var el = document.getElementById('answer');
el.innerHTML = message;
