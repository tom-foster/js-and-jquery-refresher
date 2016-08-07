//node list example
//looping through a node list
// tf 07/08/16

var hotItems = document.querySelectorAll('li.hot'); //store nodelist in array

if (hotItems.length > 0) { //if it contains items
  console.log(hotItems.length);
  for (var i = 0; i < hotItems.length; i++) { //loop throuch each items
    hotItems[i].className = 'cool'; //change value of class attribute
  }
}
