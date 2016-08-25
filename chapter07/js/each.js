//using jQuery .each() method
//tf 25/08/16

jQuery(document).ready(function ($) {
  $('li').each(function() {
    var ids = this.id;
    $(this).append(' <span class="order">' + ids + '</span>');
  });
});
