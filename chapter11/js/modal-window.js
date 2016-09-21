//modal object for the modal window
//tf 21/09/16

var modal = (function() { //Declare modal object - iife
  //lines 6-17 are considered private
  var $window = jQuery(window);
  var $modal = jQuery('<div class="modal"/>');    //create markup for modal
  var $content = jQuery('<div class="modal-content"/>');
  var $close = jQuery('<button role="button" class="modal-close">close</button>');

  $modal.append($content, $close);    //Add close button to modal

  $close.on('click', function(e) {  //if user clicks on close
    e.preventDefault();     //prevent link behaviour
    modal.close();        //Close the modal window
  });

  return {          //add code to modal
    center: function() {    //define center() method
      //Calculate distance from top and left of window to center the modal
      var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
      var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
      $modal.css({
        top: top + $window.scrollTop(),       //Center vertically
        left: left + $window.scrollLeft()   //center horizontally
      });
    },
    //settings will be passed as an object from the modal-init function
    open: function(settings) {      //define open() method
      $content.empty().append(settings.content);    //set new content of modal

      $modal.css({      //Set modal dimensions
        width: settings.width || 'auto',      //set width
        height: settings.height || 'auto'       //set height
      }).appendTo('body');              //add it to the page

      modal.center();     //call center() method
      jQuery(window).on('resize', modal.center);    //call it if window resized
    },
    close: function() {   //define close() method
      $content.empty();   //remove content from modal
      $modal.detach();    //remove modal from page
      jQuery(window).off('resize', modal.center); //renive event handler
    }


  };
}());
