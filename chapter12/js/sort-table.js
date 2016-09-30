//sorting a table using compare functions and jquery
//tf 30/09/16

var compare = { //declare object
  name: function(a, b) {    //add a method called name
    a = a.replace(/^the /i, '');      //remove the from start of parameter
    b = b.replace(/^the /i, '');      //remove the from start of parameter

    if (a < b) {        //if value a is less than value b
      return -1;        //return -1
    } else {          //otherwise
      return a > b ? 1 : 0;     //if a is greater than b return 1 or
    }                           //if they are the same return 0
  },
  duration: function(a, b) {   //add a method called duration
    a = a.split(':');           //split the time at the colon
    b = b.split(':');             //split the time at the colon

    a = Number(a[0]) * 60 + Number(a[1]);   //covert the time to seconds
    b = Number(b[0]) * 60 + Number(b[1]);   //covert the time to seconds

    return a - b;             //return a minus b
  },
  date: function(a, b) {      //add a method called date
    a = new Date(a);          //New date object to hold the date
    b = new Date(b);          //new Date object to hold the date

    return a - b;         //return a minus b
  }
};

jQuery(document).ready(function($) {
  $('.sortable').each(function() {
    var $table = $(this);           //this sortable table
    var $tbody = $table.find('tbody');      //store table body
    var $controls = $table.find('th');      //store table headers
    var rows = $tbody.find('tr').toArray();   //store array containing rows

    $controls.on('click', function () { //when user clicks on a header
      var $header = $(this);          //get the header
      var order = $header.data('sort');   //get value of data-sort attribute
      var column;       //declare variable called column

      // if selected item ha ascending or descending class, reverse contents
      if ($header.is('.ascending') || $header.is('.descending')) {
        $header.toggleClass('ascending descending');      //Toggle to other class
        $tbody.append(rows.reverse());    //reverse the array
      } else {
        $header.addClass('ascending');      //add class to header
        //remove asc or desc from all other headers
        $header.siblings().removeClass('ascending descending');
        if (compare.hasOwnProperty(order)) { //if compare object has method
          column = $controls.index(this);   //search for column's index Number

          rows.sort(function(a, b) {      //call sort() an rows array
            a = $(a).find('td').eq(column).text();      //get text of column in row a
            b = $(b).find('td').eq(column).text();      //get text of column in row b
            return compare[order](a,b);         //call compare method
          });

        $tbody.append(rows);
        }
      }
    });

  });

});
