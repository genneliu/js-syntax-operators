/* 
JS Exception Handling
*/


/* 
try...catch, finally statements
-put code that could fail inside try
-if fails, jumps to catch
-finally always runs
*/
function tryCatch(){
    let result;
  
    try {
      result = x/10;
      //code will fail, so pass error object to catch
      //always has name and message properties
    } catch (error) {
      console.log(error.message);
    }
  }
  
  //finally catch sample
  
  function finallyCatchSample(){
    let result;
  
    try{
      console.log("An error will occur");
      result = x/10;;
      console.log("This line will never run");
    } catch (error) {
      console.log("In the catch blod" + error.message);
    }
    finally {
      console.log("In the finally block")
    }
  }
  
  
  /* 
  Error Object
  can throw own custom error object
  create object with 2 properties: message + name
  */
  
  function throwError() {
    try {
      attemptDivision();
    } catch (error) {
      console.log(error.message + " - Error Type: " + error.name)
    }
  }
  
  function attemptDivision() {
    let result;
  
    try {
      result = x/10;
    } catch (error) {
      throw {
        "message": "In the attemptDivision() method the follow error",
        "name": "CustomError"
      }
    }
  }
  
  
  
  /* 
  Types of Errors
  built in 
  reference
  range
  type
  URI
  syntax
  eval
  */
  
  function handleError() {
    switch (error.name) {
      case 'ReferenceError':
        console.log("Reference" + error.message);
        break;
      case 'RangeError':
        console.log("Range" + error.message);
        break;
      case 'TypeError':
        console.log("TYPE" + error.message);
        break;
        default:
        console.log("Error Type: " + error.type)
    }
  }