// cutting, copying and pasting in jQuery
//tf 29/08/16

jQuery(document).ready(function($) {
  var $p = $('p');
  var $clonedQuote = $p.clone();
  $p.remove();
  $clonedQuote.insertAfter('h2');

  var $moveItem = $('#one').detach();
  $moveItem.append('ul');
});
