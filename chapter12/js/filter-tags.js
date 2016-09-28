//book example showing filtering by image gallery
//used in an iffe
//tf 28/09/16

(function() {


    var $imgs = jQuery('#gallery img');   //store all images
    var $buttons = jQuery('#buttons');    //store buttons element
    var tagged = {};                      //create tagged object

    $imgs.each(function() {               //loop through images and
      var img = this;                     //store img in variable
      var tags = $(this).data('tags');      //get this element's tags

      if (tags) {                     //if the element had tags
        tags.split(',').forEach(function(tagName) { //split at comma and
          if (tagged[tagName] == null) { //if object doesn't have tag
            tagged[tagName] = [];     //add empty array to object
          }
          tagged[tagName].push(img);    //add the image to the array
        });
      }
    });

    jQuery('<button/>', { //create empty button
      text: 'Show All',       //add text 'show all'
      class: 'active',          //make it active
      click: function() {       //add onclick handler to
        jQuery(this)        //get the clicked on button
          .addClass('active')   //add the class of active
          .siblings()           //get its siblings
          .removeClass('active');   //remove active from siblings
        $imgs.show();   //show all images
      }
    }).appendTo($buttons);      //add to buttons

    jQuery.each(tagged, function(tagName) {     //for each tag name
      $('<button/>', {                        //create empty button
        text: tagName + ' (' + tagged[tagName].length + ')', //add tag name
        click: function() {                 //add click handler
          jQuery(this)            //the button clicked on
            .addClass('active')     //make clicked item active
            .siblings()           //get its siblings
            .removeClass('active');     //remove active from siblings
          $imgs                   //with all of the images
            .hide()             //hide them
            .filter(tagged[tagName]) //find ones with this tagName
            .show();              //show just those images
        }
      }).appendTo($buttons);      //add to the buttons
    });


}());
