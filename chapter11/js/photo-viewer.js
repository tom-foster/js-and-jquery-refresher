//book example of photo viewer script
//tf 24/09/16

jQuery(document).ready(function($) {

  var request;              //Latest image to be requested
  var $current;             //image currently being shown
  var cache = {};           //Cache object
  var $frame = $('#photo-viewer'); //container for image
  var $thumbs = $('.thumb');  //thumbnails

  function crossfade($img) {    //function to fade between images
                                  //pass in new image as parameter
    if ($current) {               //if there is currently an image showing
      $current.stop().fadeOut('slow');    //stop any animation and fade it out
    }

    $img.css({                        //set the css margins for the image
      marginLeft: -$img.width() /2,   //negative margin of half image's width
      marginTop: -$img.height() /2    //negative margin of half image's height
    });

    $img.stop().fadeTo('slow', 1);    //stop animation on new image and fade in

    $current = $img;    //new image becomes current image

  }

  $(document).on('click', '.thumb', function(e) { //when a thumb is clicked on
    var $img,                     //create local variable called $img
        src = this.href;          //store path to image
        request = src;            //store latest image request

    e.preventDefault();       //stop default link behaviour

    $thumbs.removeClass('active');      //remove active from all thumbs
    $(this).addClass('active');     //add active to clicked thumbs

    if (cache.hasOwnProperty(src)) {    //if cache contains this image
      if (cache[src].isLoading === false) { //and if isLoading is false
        crossfade(cache[src].$img);     //call crossfade() function
      }
    } else {                        //otherwise it is not in cache
      $img = $('<img/>');         //store empty <img/> element in $img
      cache[src] = {              //store this image in cache
        $img: $img,                    //add path to the image
        isLoading: true           //set isLoading property to True
      };
    //Next few lines will run when image has loaded but are prepared first
    $img.on('load', function() {      //when image has loaded
      $img.hide();              //hide it
      //Remove is-loading class from frame & append new image to it
      $frame.removeClass('is-loading').append($img);
      cache[src].isLoading = false;     //update isLoading in cache
      //if still most recently requested image then
      if (request === src) {
        crossfade($img);        //call crossfade() function
      }                 //solves asynchronous loading issue
    });

    $frame.addClass('is-loading'); //add is-loading class to frame

    $img.attr({                   //set attributes on <img> element
      'src':src,                  //add src attribute to load image
      'alt': this.title || ''     //add title if one was given in link
    });

    }

  });


//final line runs once when rest of script has loaded to show the first image
$('.thumb').eq(0).click();      //simulate click on first thumb


});
