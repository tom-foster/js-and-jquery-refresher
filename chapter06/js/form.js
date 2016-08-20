//using form events
//tf 20/08/16

var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm = document.getElementById('formSignup'); //Store elements
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint() { //declare function
  var pack = this.options[this.selectedIndex].value; //get selected options
  if (pack == 'monthly') { //if monthly package
    elPackageHint.textContent = 'Save £10 if you pay for 1 year!'; //show this msg
  } else { //otherwise
    elPackageHint.textContent = 'Wise choice'; //Show this message
  }
}

function checkTerms(e) { //Declare function
  if (!elTerms.checked) { // if checkbox not ticked
    elTermsHint.textContent = 'You must agree to the terms.'; //Show message
    e.preventDefault(); //Don't submit form
  }
}

//Create event listeners: submit calls checkTerms(), change calls packageHint()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);
