//ajax requests with fine-grained control using jQuery
//book example
//tf 04/09/16

jQuery('nav a').on('click', function(e) {
  e.preventDefault();
  var url = this.href;                  //url to load
  var $content = jQuery('#content');    //cache selection

  jQuery('nav a.current').removeClass('current');       //update links
  jQuery(this).addClass('current');
  jQuery('#container').remove();          //remove content

  jQuery.ajax({
    type: "GET",        //GET or POST
    url: url,           //Path to file
    timeout: 2000,      //Waiting time
    beforeSend: function() {          //Before AJAX requests
      $content.append('<div id="load">Loading</div>');   //Load message
    },
    complete: function() {        //once finished
      jQuery('#load').remove();   //clear message
    },
    success: function(data) {       //show content when ajax returned
      $content.html( jQuery(data).find('#container') ).hide().fadeIn(400);
    },
    error: function() {       //show error message if timed out or error
      $content.html('<div class="container">Please try again soon.</div>');
    }
  });

});
