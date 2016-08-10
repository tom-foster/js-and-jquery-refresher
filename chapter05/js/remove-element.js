//removing elements via DOM manipulation
//removing an element from the DOM tree
//10/08/16 tf

var removeEl = document.getElementsByTagName('li')[3]; //the element to remove

var containerEl = removeEl.parentNode; //it's containing element

containerEl.removeChild(removeEl); //removing the element
