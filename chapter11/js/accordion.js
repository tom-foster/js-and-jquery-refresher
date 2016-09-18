//creating a simple accordion using jQuery
//although they're not great from a UI perspective as people don't read them
//tf 18/08/16

jQuery(document).ready(function($) {
  $('.accordion').on('click', '.accordion-control', function(e) { //when clicked
    e.preventDefault();           //prevent the default behaviour of the button
    $(this)     //get the element the user clicked on
      .next('.accordion-panel') //select following panel
      .not(':animated') //if it is not currently animating
      .slideToggle(); //use slide toggle to show or hide it
  });
});
