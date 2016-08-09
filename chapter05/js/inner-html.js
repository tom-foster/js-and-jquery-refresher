//example of the innerHTML tag
//chapter05
//tf 09/08/16

//Store the first list item in a variable
var firstItem = document.getElementById('one');

//Get the content of the first list item
var itemContent = firstItem.innerHTML;

console.log(itemContent);

//Update the content of the first list  item so it is a link
firstItem.innerHTML = '<a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\">' + itemContent + '</a>';
