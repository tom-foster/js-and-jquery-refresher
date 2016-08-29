//an example pulling everything in the jQuery chapter together
//tf 29/08/16

jQuery(document).ready(function($) {
  //SETUP
  var $list, $newItem, $newItemButton;
  var item = '';                            //item is an empty string
  $list = $('ul');                          //cache the unordered list
  $newItemForm = $('#newItemForm');          //cache form to add new items
  $newItemButton = $('#newItemButton');       //cache button to show form

  $('li').hide().each(function(index) {       //hide list items
    $(this).delay(450 * index).fadeIn(1600);  //then fade them in
  });

  //ITEM COUNTER
  function updateCount() {                    //Declare function
    var items = $('li[class!=complete]').length; //number of items in list
    $('#counter').text(items);                //added into counter circle
  }

  updateCount();                              //call the function

  // SETUP FORM FOR NEW ITEMS
  $newItemButton.show();                          //Show the button
  $newItemForm.hide();                            //show the form
  $('#showForm').on('click', function() {         //when new item clicked
    $newItemButton.hide();                       //hide the button
    $newItemForm.show();                        //show the form
  });

  //ADDDING a NEW LIST ITEM
  $newItemForm.on('submit', function(e) {     //when a new item is submitted
    e.preventDefault();                   //prevent form being submitted
    var text = $('input:text').val();   //get value of text input
    $list.append('<li>' + text + '</li>');    //add item to end of the list
    $('input:text').val('');              //empty the text input
    updateCount();                      //update the count
  });

  // CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
  $list.on('click', 'li', function () {
    var $this = $(this);      //cache the elemtn in a jQuery object
    var complete = $this.hasClass('complete');  //is item complete

    if (complete === true) { //check if item is complete
      $this.animate({         //if so, animate opacity + padding
        opacity: 0.0,
        paddingLeft: '+=180'
    }, 500, 'swing', function () { //use callback when animation completes
      $this.remove();     //then completely remove this item
    });
  } else {                      //otherwise indicate it is complete
    item = $this.text();        //get the text from the list item
    $this.remove();             //remove the list item
    $list                       //add back to end of list as complete
      .append('<li class=\"complete\">' + item + '</li>')
      .hide().fadeIn(300);      //hide it so it can be faded in
    updateCount();                //update the counter
  }                               //end of else option
});
                               //end of event handler
});
