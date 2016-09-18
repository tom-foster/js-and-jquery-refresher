//throwing errors
//this example shows for NaN
//tf 18/09/16

var width = 12;       //width variable
var height = 'test';      //purposefully incorrect

function calculateArea(width, height) {
  try {
    var area = width * height;        //try to calculate area
    if (!isNaN(area)) {       //if it is a number
      return area;      //if it is a number
    } else {
      throw new Error('calculateArea() received invalid number');
    }
  } catch(e) {  //if there was an error
    console.log(e.name + ' ' + e.message); //show error in console
    return 'We were unable to calculate the area.'; //show users a message
  }
}

//Try to show the area on the PAGE
document.getElementById('area').innerHTML = calculateArea(width, height);
