//using the .html() jQuery to get a node

//tf 22/08/16

var $listItemHTML = jQuery('li').html();
jQuery('li').append('<i>' + $listItemHTML + '</i>');
