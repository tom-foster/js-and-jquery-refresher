// traversing the DOM in jQuery
//tf 28/08/16

jQuery(document).ready(function ($) {
  var $h2 = $('h2');
  $('ul').hide();
  $h2.append('<a class="show">show</a>');

  $h2.on('click', function() {
    $h2.next()
      .fadeIn(500)
      .children('.hot')
      .addClass('complete');
    $h2.find('a').fadeOut();
  });
});
