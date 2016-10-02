//using yepnope (although deprecated now) and require is a better solution
// as a conditional loader
//tf 02/10/16

yepnope({
  test: Modernizr.inputtypes.number,
  // yep: ['js/numPolyfill.js', 'css/number.css'],
  nope: ['js/numPolyfill.js', 'css/number.css'],
  complete: function() {
    console.log('YepNope + Modernizr are done');
  }
});
