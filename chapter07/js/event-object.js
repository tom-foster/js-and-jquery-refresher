//event object in jQuery
//tf 27/08/16

jQuery(document).ready(function ($) {
  $('li').on('click', function(e) {
    $('li span').remove();
    var date = new Date();
    date.setTime(e.timeStamp);
    var clicked = date.toDateString();
    $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
  });

});
