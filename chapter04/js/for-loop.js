// showing a for loop book example
// tf 02/08/16

var scores = [24, 42, 17]; //array of scores
var arrayLength = scores.length; //the amount of items in the array
var roundNumber = 0; //Current round
var message = ''; //Message
var i; //Counter

//Loop through the items in the array
for (i = 0; i < arrayLength; i++) {

  // Arrays are zero based (so 0 is round 1)
  // Add 1 to the current round
  roundNumber = (i + 1);

  //Write the current round to message
  message += 'Round ' + roundNumber + ': ';

  //Get the score from the scores array
  message += scores[i] + '<br />';
}

document.getElementById('answer').innerHTML = message;
