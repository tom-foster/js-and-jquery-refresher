//updating an array
var colors = ['white', 'black', 'custom'];

//remove custom and replace with green
colors[2] = 'green';

//Get the element with an id of colors
var el = document.getElementById('colors');

el.textContent = colors[2];
