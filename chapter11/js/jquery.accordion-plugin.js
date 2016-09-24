// a jquery plugin example
//tf 24/09/16


(function($) {      //user $ as variable name
  $.fn.accordion = function(speed) { //return the jquery selection
    this.on('click', '.accordion-control', function(e) {
      e.preventDefault();
      $(this)
        .next('.accordion-panel')
        .not(':animated')
        .slideToggle(speed);
    });
    return this;    //return the jQuery selection
  };
}(jQuery));   //pass in jQuery object
