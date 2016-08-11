//example chapter 05
//tf 11/08/16


//adding items to start and end of list
var list = document.getElementsByTagName('ul')[0]; //get the <ul> element

//add new item to end of list
var newItemLast = document.createElement('li'); //create element
var newTextLast = document.createTextNode('cream'); //create text node
newItemLast.appendChild(newTextLast); //add text node to element
list.appendChild(newItemLast); //add element to end of list

//add new item start of list
var newItemFirst = document.createElement('li'); //create element
var newTextFirst = document.createTextNode('frogs'); //create text node
newItemFirst.appendChild(newTextFirst); //append text node to element
list.insertBefore(newItemFirst, list.firstChild); //add element to start of list

var listItems = document.querySelectorAll('li'); //all <li> elements

//add a class of cool to all list items
var i; //counter variable
for (i = 0; i < listItems.length; i++) { //loop through elements
  listItems[i].className = 'cool'; //change class to cool
  }

//add number of items in the list to the heading
var heading = document.querySelector('h2'); //get first h2 elements
var headingText = heading.firstChild.nodeValue; //h2 text
var totalItems = listItems.length; //number of <li> elements
var newHeading = headingText + '<span>' + totalItems + '</span>'; //content
heading.innerHTML = newHeading;
