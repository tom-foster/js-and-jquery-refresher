// a do-while loop in js book example
// tf 02/08/16

var i = 1; //set counter to 1
var message = ''; //message

//store 5 times table in a variable
do {
  message += i + ' x 5 = ' + (i *5) + '<br />';
  i++;
} while(i < 1);
//Note how this is already 1 and it still runs

document.getElementById('answer').innerHTML = message;
