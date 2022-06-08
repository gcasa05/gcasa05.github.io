/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var walkerPosX = 0;
  var walkerPosY = 0;
  var walkerSpeedX = 0;
  var walkerSpeedY = 0;
  $(document).on('keydown', handleKeyDown) //registers key down press
  // Game Item Objects
var KEY = {
  "left": 37, "right": 39, "up": 38, "down": 40,"none": 0,
}

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('eventType', handleEvent);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
    handleKeyUp()
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.down) {
      walkerSpeedY = -5;
  }else if  (event.which === KEY.up) {
    walkerSpeedY = 5;
  }else if  (event.which === KEY.left) {
    walkerSpeedX = -5;
  }else if  (event.which === KEY.right) {
    walkerSpeedX = 5;             //these print to the console what key was pressed
}}

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function repositionGameItem(){
walkerPosX += walkerSpeedX;
walkerPosY += walkerPosY;
  }
  function redrawGameItem(){
    $("#walker").css("left", walkerPosX); 
    $("#walker").css("top", walkerPosY);   
  }
  function handleKeyUp(event){
    if(event.which === KEY.none){
       walkerSpeedX = 0;

       walkerSpeedY = 0;
      return handleKeyUp;
    }

  }
}
