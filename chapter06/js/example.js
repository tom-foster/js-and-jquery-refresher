//end of chapter example of events in action
//20/08/16 tf

var noteInput, noteName, textEntered, target;   //declare variables

noteName = document.getElementById('noteName'); //Element that holds note
noteInput = document.getElementById('noteInput'); //input for writing the note

function writeLabel(e) {          //declare function
  if (!e) {       //if event object not present
    e = window.event;     //use ie5-8 fallback
  }
  target = e.target || e.srcElement;      //get target of event
  textEntered = e.target.value; // value of that element
  noteName.textContent = textEntered; //update note text
}

function recorderControls(e) { //declare recordControls()
  if(!e) {            //if event object not present
    e = window.event;     //use ie5-8 fallback
  }
  target = e.target || e.srcElement;      //get the target eleemnt
  if (e.preventDefault) { //if preventDefault() supported
    e.preventDefault(); //stop default action
  } else {              //Otherwise
    e.returnValue = false; //IE fallback: stop default action
  }

  switch(target.getAttribute('data-state')) { //get the data-state attribute
    case 'record':              //if its value is record
      record(target);         //call the record() function
      break;                  //exit function to where called
    case 'stop':        //if the value is stop
      stop(target); //call the stop() function
      break;    //exit function to where called
  }
}

function record(target) { //declare function
  target.setAttribute('data-state', 'stop'); //set data-state attr to stop
  target.textContent = 'stop';      //set text to 'stop'
}

function stop(target) {
  target.setAttribute('data-state', 'record'); //set data-state attr to record
  target.textContent = 'record';      //set text to 'record'
}

if (document.addEventListener) { //if event listener supported
  document.addEventListener('click', function(e) { //for any click document
    recorderControls(e); //call recorderControls()
  }, false);    //capture during bubble phase
  //if input event fires on noteInput input call writeLabel()
  noteInput.addEventListener('input', writeLabel, false);
} else { //Otherwise
  document.attachEvent('onclick', function(e) { //ie fallback: any click
    recorderControls(e); //calls recorderControls()
  });
  //if keyup event fires on noteInput call writeLabel()
  noteInput.attachEvent('onkeyup', writeLabel);
}
