//showing the number object in JavaScript
//tf 30/07/16

var originalNumber = 10.23456;

var msg = '<h2>Original number</h2><p>' + originalNumber + '</p>';
msg += '<h2>3 decimal places</h2><p>' + originalNumber.toFixed(3) + '</p>';
msg += '<h2>3 digits</h2><p>' + originalNumber.toPrecision(3) + '</p>';
msg += '<h2>Scientific notation</h2></p>' + originalNumber.toExponential() + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;
