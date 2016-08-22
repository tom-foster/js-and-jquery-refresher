//updating and changing content using jQuery example
//tf 22/08/16

jQuery(function() {
  jQuery('li:contains("pine")').text('almonds');
  jQuery('li.hot').html(function(){
    return '<em>' + jQuery(this).text() + '</em>';
  });
  jQuery('li#one').remove();
});
