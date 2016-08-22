//using .text() in jQuery to get text from nodes
//tf 22/08/16

var $listItemText = jQuery('li').text();
jQuery('li').append('<i>' + $listItemText + '</i>');
