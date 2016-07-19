var inStock, shipping;

inStock = true;
shipping = false;

/* SOME OTHER PROCESSES happen which change the shipping and instock
*/

inStock = false;
shipping = true;


var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShip = document.getElementById('shipping');
elShip.className = shipping;
