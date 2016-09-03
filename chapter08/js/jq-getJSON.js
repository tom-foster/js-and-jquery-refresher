//loading json and handling AJAX errors in jQuery
//tf 03/09/16

jQuery('#exchangerates').append('<div id ="rates"></div><div id="reload"></div>');

function loadRates() {
  jQuery.getJSON('../data/rates.json')
  .done( function(data) {
    var d = new Date();
    var hrs = d.getHours();
    var mins = d.getMinutes();
    var msg = '<h2>Exchange Rates</h2>';
    jQuery.each(data, function(key, val) {
      msg += '<div class="' + key + '">' + key + ':' + val + '</div>';
    });
    msg += '<br>Last update: ' + hrs + ':' + mins + '<br/>';
    jQuery('#rates').html(msg);
  }).fail( function() {
    jQuery('aside').append('Sorry, we cannot load rates.');
  }).always( function() {
    var reload = '<a id="refresh" href="#">';
    reload += '<img src = "../images/refresh.png" alt="refresh" /></a>';
    jQuery('#reload').html(reload);
    jQuery('#refresh').on('click', function(e) {
      e.preventDefault();
      loadRates();
    });
  });
}

loadRates();
