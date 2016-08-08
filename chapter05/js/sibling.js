//the use of previous and next sibling in js
//this is for node selection
//tf 08/08/16

//Select the starting point and find its siblings
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

console.log("the prevItem is : " + prevItem);
console.log("the nextItem is : " + nextItem);

//Change the values of the siblings' class attributes
prevItem.className = 'complete';
nextItem.className = 'cool';
