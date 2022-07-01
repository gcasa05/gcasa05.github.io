// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilterNoBackground(reddify);
applyFilter(decreaseBlue);
applyFilterNoBackground(increaseGreenByBlue);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
  for (var r = 0; r < image.length; r++) { 
    
    for (var c = 0; c < image[r].length; c++) { 
    
    
   var rgbString = image[r][c];
   var rgbNumbers = rgbStringToArray(rgbString);
   filterFunction(rgbNumbers);
   rgbString = rgbArrayToString(rgbNumbers);
   image[r][c] = rgbString;
    }


} }

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
  var back = image[0][0]
  for (var r = 0; r < image.length; r++) { 
    
    for (var c = 0; c < image[r].length; c++) { 
    
    if ( image[r][c] === back){
      var rgbString = image[r][c];
      var rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers);
      image[r][c] = rgbString;
    }
   
    }


} }

// TODO 5: Create the keepInBounds function
function keepInBounds(x){
var mint = Math.min(255,Math.max(0,x));

return mint;


}

// TODO 3: Create reddify function
function reddify(array){
  array[RED] = 200 ;
}

// TODO 6: Create more filter functions
function decreaseBlue(aray){
  aray[BLUE] = keepInBounds(aray[BLUE] - 50);
}
function increaseGreenByBlue(arry){

  arry[GREEN] = keepInBounds(arry[BLUE] + arry[GREEN])

}

// CHALLENGE code goes below here
