// example of using query selector and query selector all
// chapter 05
//tf 07/08/16

//querySelector() only returns the first match
var el = document.querySelector('li.hot');
el.className = 'cool';

//querySelectorAll returns a NodeList
//The second matching element (the third list item) is selected and changed
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';
