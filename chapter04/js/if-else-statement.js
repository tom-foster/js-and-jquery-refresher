//showing an example if else statements
//tf 01/08/16

var score = 40; //score
var pass = 50; //needed to pass
var message;

//Select message to write based on score
if (score >= pass) {
  message = 'Congratulations, you passed';
} else {
  message = 'You failed it happens';
}

var el = document.getElementById('answer');
el.textContent = message;
