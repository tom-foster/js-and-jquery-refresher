//accessing and changing a text node value
//chapter5
//tf 08/08/16

var itemTwo = document.getElementById('two'); // get second list item

var elText = itemTwo.firstChild.nodeValue; //get it's text content
console.log(elText);

elText = elText.replace('pine nuts', 'kale, a superfood'); //Change pine nuts
//to kale
console.log(elText);
itemTwo.firstChild.nodeValue = elText; //Update the list item
