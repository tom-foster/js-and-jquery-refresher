//book example of a while loop in javascript
//tf 02/08/16

var i = 1; //set counter to 1
var message = ''; //message

//Store 5 times table in a variable
while (i < 10) {
  message += i + 'x 5 = ' + (i * 5) + '<br />';
  i++;
}

document.getElementById('answer').innerHTML = message;
