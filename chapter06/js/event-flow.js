//example of event flow
//event bubbling and event capturing

//tf 14/08/16

function showElement() {
  alert(this.innerHTML);
}

el = document.getElementById('list'); // < el is reused and not defined
el.addEventListener('click', showElement, false);

el = document.getElementById('item');
el.addEventListener('click', showElement, false);

el = document.getElementById('link');
el.addEventListener('click', showElement, false);

el = document.getElementById('list2');
el.addEventListener('click', showElement, true);

el = document.getElementById('item2');
el.addEventListener('click', showElement, true);

el = document.getElementById('link2');
el.addEventListener('click', showElement, true);
