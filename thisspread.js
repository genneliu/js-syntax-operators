/* 
this & spread
*/



/* 
-this always refers to object
-object in which the current code is running
-sometimes the object can be changed

console.log(this.globalObject) = global

-different keywords based on context

in a method: ownder object

function: global object

event: element that recieved event

call()/ apply: methods refers to object passed in

use strict also affects this
*/



/* 
This in event handlers
*/



/* 
SPREAD =======================
*/

/* 
-Spread expands any iterable object into an array
-used for passing multiple arguments into method
-syntax uses the ellipsis symbol (...)
-always on the right side of an equal sign
-IE and Edge do not support spread 
*/

//make string into array
function stringToArray() {
    let productNumber = "FR-11-GHW"
    let values = [...productNumber];
    console.log(values)
  }
  
  
  /* 
  Copy an Array
  */
  function copyArray () {
    let arr = [1,2,3];
    let arr2=[...arr]; //same as slice
  
    //primitive, make changes to duplicate does not change original
    arr2.push(90)
  
  }
  //arr2 = 90, 1, 2,3
  
  
  
  /* 
  Copy of Array of Objects 
  copies pointer, not actual object
  */
  
  /* 
  Concatenate Two Arrays
  
  */
  
  /* 
  Use Spread to build objects where we pass in multiple values to constructor
  */
  
  /* 
  Pass parameters to function
  
  apply() method
  own functions
  */
  
  let arcs = [1, 2, 3]
  mutipleParams(...arcs)
  
  /* 
  Shallow copy on Object literals
  {} object literal curly 
  
  */
  
  /* 
  
  */