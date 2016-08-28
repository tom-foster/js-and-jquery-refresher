//basic effects in jQuery
//tf 28/08/16

jQuery(document).ready(function ($) {
  $('h2').hide().slideDown();
  var $li = $('li');
  $li.hide().each(function(index) {
    $(this).delay(700 * index).fadeIn(700);
  });
  $li.on('click', function () {
    $(this).fadeOut(700);
  });
});
