//jquery responsive slider
//tf 24/09/16

jQuery(document).ready(function ($) {
  $('.slider').each(function() { //for every slider
    var $this = $(this);      //current slider
    var $group = $this.find('.slide-group'); //get the slide-group (container)
    var $slides = $this.find('.slide');   //create jquery object to hold all slides
    var buttonArray = [];       //create array to hold navigation buttons
    var currentIndex = 0;       //hold index number of the current slide
    var timeout;        //sets gap between auto-sliding

    function move(newIndex) { //creates the slide from old to new one
      var animateLeft, slideLeft;   //declare variables

      advance();      //when slide moves, call advance again

      //if it is the current slide /animating do nothing
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }

      buttonArray[currentIndex].removeClass('active'); //remove class from item
      buttonArray[newIndex].addClass('active');   //add class to new item

      if (newIndex > currentIndex) { //if new item > current
        slideLeft = '100%';     //site the new slide to the right
        animateLeft = '-100%';      //animate the current group to the left
      } else {                  //Otherwise
        slideLeft = '-100%';    //site the new slide to the left
        animateLeft = '100%';     //animate the current group to the right
      }

    //position new slider to left (if less) or right (if more) of current
    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );

    $group.animate( {left: animateLeft}, function() { //animate slides and
      $slides.eq(currentIndex).css( {display: 'none'} ); //hide previous slide
      $slides.eq(newIndex).css( {left: 0} ); //set position of the new item
      $group.css( {left: 0} ); //set position of group of slides
      currentIndex = newIndex;    //set currentIndex to the new image
    });
  }

  function advance() {      //user to set
    clearTimeout(timeout);    //clear previous timeout
    timeout = setTimeout(function() { //set new timer
      if (currentIndex < ($slides.length - 1)) { //if slide < total slides
        move(currentIndex + 1);   //move to next slide
      } else {                //Otherwise
        move(0);      //move to the first slide
      }
    }, 4000); //milliseconds time will wait
  }

  $.each($slides, function(index) {
    //create a button element for the slide
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) { //if index is the current item
      $button.addClass('active'); //add the active class
    }

    $button.on('click', function() { //create event handler for the button
      move(index);        //it calls the move() function
    }).appendTo('.slide-buttons');    //add to the buttons holder
    buttonArray.push($button);    //add it to the button array
  });

  advance();      //script is set up, advance() to move it


});
});
