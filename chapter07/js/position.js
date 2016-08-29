//determing the position of items on the page using jQuery
//tf 29/08/16

jQuery(document).ready(function($) {
  var $window = $(window);
  var $slideAd = $('#slideAd');
  var endZone = $('#footer').offset().top - $window.height() - 500;
  console.log($('#footer').offset().top + " footer offset().top"); //checking numbers
  console.log($window.height() + " window.height()"); //checking numbers
  console.log($window.scrollTop() + " window scrollTop");
  $window.on('scroll', function () {
    if ( (endZone) < $window.scrollTop() ) {
      $slideAd.animate({ 'right': '0px' }, 250);
    } else {
      $slideAd.stop(true).animate({'right': '-360px'}, 250);
    }
  });
});
