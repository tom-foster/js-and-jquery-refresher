//basic use of jquery chapter07
//tf 21/08/16

jQuery(':header').addClass('headline');
jQuery('li:lt(3)').hide().fadeIn(2500);
jQuery('li').on('click', function() {
  jQuery(this).remove();
});
