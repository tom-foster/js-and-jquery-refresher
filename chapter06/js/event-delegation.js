//using event delegation
//tf 17/08/16

function getTarget(e) {   //declare function
  if (!e) {               //if there is no event object
    e = window.event;     //use old ie event object
  }
  return e.target || e.srcElement;    //get the target of event
}

function itemDone(e) {      //declare function
  //Remove item from the list
  var target, elParent, elGrandparent;  //declare variables
  target = getTarget(e);    ///get the item clicked link

  if ( target.nodeName.toLowerCase() == "a" ) {  // If user clicked on an a element
    elListItem = target.parentNode;              // Get its li element
    elList = elListItem.parentNode;              // Get the ul element
    elList.removeChild(elListItem);              // Remove list item from list
  }
  if ( target.nodeName.toLowerCase() == "em" ) { // If the user clicked on an em element
    elListItem = target.parentNode.parentNode;   // Get its li element
    elList = elListItem.parentNode;              // Get the ul element
    elList.removeChild(elListItem);              // Remove list item from list
  }

  //Prevent the link from taking you elsewhere
  if (e.preventDefault)   {     //if preventDefault() works
    e.preventDefault();   //use preventDefault()
  } else {        //otherwise
    e.returnValue = false;    //use old IE version
  }
}

//Set up event listeners to call itemDone() on click
var el = document.getElementById('shoppingList');   // get shopping list
if (el.addEventListener) { //if eventListeners works
  el.addEventListener('click', function(e) { //add listener on click
    itemDone(e); //it calls itemDone()
  }, false); //use bubbling phase for flow
} else {    //otherwise
  el.attachEvent('onclick', function(e){    //use old ie model: onclick
    itemDone(e);      //call itemDone()
  });
}
