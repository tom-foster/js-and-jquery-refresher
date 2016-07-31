//using comparison operators
//tf 31/07/16

var pass = 50; //pass mark
var score = 90; //score

//check if the user has passed
var hasPassed = score >= pass;

//Write the message into the page1
var el = document.getElementById('answer');
el.textContent = 'Level passed: ' + hasPassed;
