//using .text to get at content in jQuery
//tf 22/08/16

var $listText = jQuery('ul').text();

jQuery('ul').append('<p>' + $listText + '</p>');
