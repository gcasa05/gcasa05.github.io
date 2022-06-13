/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var walkerPosX = 0;                     // setting the starter positions/speeds for the walker
  var walkerPosY = 0;
  var walkerSpeedX = 0;
  var walkerSpeedY = 0;
  $(document).on('keydown', handleKeyDown) //registers key down press
  // Game Item Objects
var KEY = {
  "left": 37, "right": 39, "up": 38, "down": 40,"none": 0,     //is what registers which key is being pressed and allows us to move the walker accordingly
}

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);  //updates the walker evertime a key is pressed
  $(document).on('keyup', handleKeyUp);      //or released
                                                                        // change 'eventType' to the type of event you want to handle

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
  function handleKeyDown(event) {                 //registers any key being pressed and alows us to move the walker based on it 
    if (event.which === KEY.down) {
      walkerSpeedY = 5;
  }else if  (event.which === KEY.up) {
    walkerSpeedY = -5;
  }else if  (event.which === KEY.left) {
    walkerSpeedX = -5;
  }else if  (event.which === KEY.right) {
    walkerSpeedX = 5;
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
  function repositionGameItem(){      //moves the walker
walkerPosX += walkerSpeedX;
walkerPosY += walkerSpeedY;
  }
  function redrawGameItem(){          //updates the walker on the board
    $("#walker").css("left", walkerPosX); 
    $("#walker").css("top", walkerPosY);   
  }
  function handleKeyUp(event){          //MAKES WALKER STOP MOVING using the key being pressed and released as a "trigger"
    if(event.which === KEY.up){
      walkerSpeedY = 0;
    }else if(event.which === KEY.down){
      walkerSpeedY = 0;
    }else if(event.which === KEY.right){
      walkerSpeedX = 0;
  }else if(event.which === KEY.left){
    walkerSpeedX = 0;
  }
}}
