//creating attributes and chaning their values
//chapter05
//tf 11/08/16

var firstItem = document.getElementById('one'); //get the first item
firstItem.className = 'complete'; //Change its class attribute

var fourthItem = document.getElementsByTagName('li')[3]; //get the fourth item
fourthItem.setAttribute('class', 'cool'); //Add an attribute to it
