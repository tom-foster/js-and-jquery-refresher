//example of a switch statement from the book
//tf 01/08/16

var message; //message
var level = 6; //Level

//Determine message based on Level
switch(level) {
  case 1:
    message = 'Good luck on the first test';
    break;
  case 2:
    message =  'Second test go go gadget';
    break;
  case 3:
    message = 'final round finish them!';
    break;
  default:
    message = '<a href="https://www.youtube.com/watch?v=EAwWPadFsOA">Mortal Kombat!</a>';
    break;
}

var el = document.getElementById('answer');
el.innerHTML = message;
