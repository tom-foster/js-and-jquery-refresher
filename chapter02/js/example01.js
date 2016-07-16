// tf 16/07/16
// Simple variable example

var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById('cost');
el.textContent = '£' + total;
