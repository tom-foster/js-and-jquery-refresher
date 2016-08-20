//keyboard events example
//keyup event
//tf 20/08/16

var el;       //declare variable

function charCount(e) {       //declare function
  var textEntered, charDisplay, counter, lastKey;   //declare variables
  textEntered = document.getElementById('message').value; //User's text
  charDisplay = document.getElementById('charactersLeft'); //counter element
  counter = (180 - (textEntered.length));     //Number of chars left
  charDisplay.textContent = counter;    //show chars left
  lastKey = document.getElementById('lastKey');   //get last key element
  lastKey.textContent = 'Last key in ASCII code: ' + e.keyCode; //create msg
}

el = document.getElementById('message');    //get msg element
el.addEventListener('keyup', charCount, false); //on keyup - call charCount()
