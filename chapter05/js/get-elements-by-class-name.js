// get elements by class name example
// chapter05

var elements = document.getElementsByClassName('hot'); // find hot items

if (elements.length > 2) { //if 3 or more are found

  var el = elements[2]; //select the third one from the NodeList
  el.className = 'cool'; //change the value of it's class attribute
}
