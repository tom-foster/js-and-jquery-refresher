//using filters in jQuery
//tf 28/08/16

var $listItems = jQuery('li');
$listItems.filter('.hot:last').removeClass('hot');
jQuery('li:not(.hot)').addClass('cool');
$listItems.has('em').addClass('complete');

$listItems.each(function() {
  var $this = jQuery(this);
  if ($this.is('.hot')) {
    $this.prepend('Priority item: ');
  }
});

jQuery('li:contains("honey")').append(' (local)');
