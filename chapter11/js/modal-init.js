//creating a modal window
//using an iffe
//tf 20/09/16

(function () {
  var $content = jQuery('#share-options').detach();      //remove modal from page

  jQuery('#share').on('click', function() { //click handler to open modal
      modal.open({content: $content, width:340, height:300});
  });
}());
