//showing event delegation
//tf 28/08/16

jQuery(document).ready(function ($) {
  var listItem, itemStatus, eventType;

  $('ul').on(
    'click mouseover',
    ':not(four)',
    {status: 'important'},
    function(e) {
      listItem = 'Item: ' + e.target.textContent + '<br />';
      itemStatus = 'Status: ' + e.data.status + '<br />';
      eventType = 'Event: ' + e.type;
      $('#notes').html(listItem + itemStatus + eventType);
    }
  );
});
