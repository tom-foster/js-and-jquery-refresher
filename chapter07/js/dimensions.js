//changing dimensions using jQuery
//tf 29/08/16

jQuery(document).ready(function($) {
  var listHeight = $('#page').height();
  $('ul').append('<p>Height ' + listHeight + 'px</p>');
  $('li').width('50%'); //note percentage is given as a string
  $('li#one').width(125);
  $('li#two').width('6em'); //ems are given in a string
  $('li#three').width('75%');
});
