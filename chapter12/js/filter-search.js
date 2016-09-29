//showing live search book example
//tf 29/09/16

(function () { //lives in an IIFE

  var $imgs = jQuery('#gallery img');      //get the images
  var $search = jQuery('#filter-search');   //get the input element
  var cache = [];                           //create an array called cache

  $imgs.each(function() {           //for each image
    cache.push({                    //add an object to the cache array
      element: this,                //this image
      text: this.alt.trim().toLowerCase() //its alt text (lowercase trimmed)
    });
  });

  function filter() { //declare filter() function
    var query = this.value.trim().toLowerCase();    //get the query
    cache.forEach(function(img) { //for each entry in cache pass image
      var index = 0;          //set index to 0

      if (query) {                //if there is some query text
        index = img.text.indexOf(query); //find if query text is in there
      }

      img.element.style.display = index === -1 ? 'none' : ''; //show / hide
    });
  }

  if ('oninput' in $search[0]) { //if browser supports input event
    $search.on('input', filter);    //user input event to call filter()
  } else {                    //Otherwise
    $search.on('keyup', filter);  //use keyup event to call filter()
  }
}());
