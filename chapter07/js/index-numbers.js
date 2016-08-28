//using index numbers
//tf 28/08/16

jQuery(document).ready(function($) {
  $('li:lt(2)').removeClass('hot');
  $('li').eq(0).addClass('complete');
  $('li:gt(2)').addClass('cool');
});
