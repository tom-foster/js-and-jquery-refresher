//add new content using jQuery
//tf 22/08/16

jQuery(function (){
  jQuery('ul').before('<p class="notice">Just updated</p>');
  jQuery('li.hot').prepend('+ ');
  var $newListItem = jQuery('<li><em>gluten-free</em soy sauce</li>');
  jQuery('li:last').after($newListItem);
});
