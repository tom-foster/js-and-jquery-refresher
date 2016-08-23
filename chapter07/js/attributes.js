// getting and setting attribute values and working with attributes
//in jQuery
//tf 23/08/16

jQuery(document).ready(function() {
  jQuery('li#three').removeClass('hot');
  jQuery('li.hot').addClass('favorite');
  jQuery('ul').attr('id', 'group');
});
