/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  var paddle1 = gameItems(0, 160, 20, 80, 0, 0, "#paddle1")
  var paddle2 = gameItems(420, 160, 20, 80, 0, 0, "#paddle2")
  var ball = gameItems(220, 200, 20, 20, -5, 0, "#ball")
  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);    
  $(document).on('keyup', handleKeyUp);                       // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    redrawGameItem(paddle1);
    redrawGameItem(paddle2);
    redrawGameItem(ball);
  }
  
  /* 
  Called in response to events.
  */
 //registers when a key that moves a paddle is released
  function handleKeyUp(event) {
    if( event.which === keys.s){
    paddle1.speedY = 0
  }else if (event.which === keys.w){
    paddle1.speedY = 0
  }else if (event.which === keys.up){
    paddle2.speedY = 0
  }else if (event.which === keys.down){
    paddle2.speedY = 0
  }
}
//registers when a key that moves a paddle is pressed down
function handleKeyDown(event) {
  if( event.which === keys.s){
    paddle1.speedY = 5
  }else if (event.which === keys.w){
    paddle1.speedY = -5
  }else if (event.which === keys.up){
    paddle2.speedY = -5
  }else if (event.which === keys.down){
    paddle2.speedY = 5
  }
}

  }
  

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
//factroy funtion to hld the data of the tgame items
  function gameItems(x, y, width, height, speedX, speedY, id){
    var newGameItem = {}
    newGameItem.x = x;
    newGameItem.y = y;
    newGameItem.width = width;
    newGameItem.height = height;
    newGameItem.speedX = speedX;
    newGameItem.speedY = speedY;
    newGameItem.id = id;
    return newGameItem;
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  // redraws and repoditions the geame items
  function redrawGameItem(item){    
  item.x += item.speedX
  item.y += item.speedY //updates the game items on the board 
    $(item.id).css("top", item.y);
    $(item.id).css("left", item.x);   
  }
  //registers the keys pressed
  var keys = {
    w: 87,
    s: 83,
    up: 38, 
    down: 40,
  }

