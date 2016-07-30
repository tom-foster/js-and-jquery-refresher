// showing the date object difference
// tf 30/07/16

var today = new Date();
var year = today.getFullYear();
var established = new Date('June 1, 1987 14:30:22');

var difference = today.getTime() - established.getTime();
difference = (difference / 31556900000);

var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' years of online travel advice';
