//using animation in jQuery
//tf 28/08/16

jQuery(document).ready(function ($){
  $('li').on('click', function() {
    $(this).animate({
      opacity: 0.0,
      paddingLeft: '+=80'
    }, 500, function () {
      $(this).remove();
    });
  });
});
