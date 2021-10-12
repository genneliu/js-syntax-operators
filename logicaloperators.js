/* 

*/


/* 
Truthy Falsy
any variable with value is true (10, "hey")
false= undefined, empty string, NaN
*/

//sample

function trueFalseSample(){
    let price = 200; //true value
    let color = "Red"; //true
    let result;
  
    console.log("Check for true values");
    //evaluate expression
    result = price > 10 //true
    console.log(result)
  
    //test expression
    if (price > 10) {
      console.log("Price is > 10");
    }
  
  //can also check if price has something in it
      if(price){
        console.log("Price is > 0")
        //truthy
      }
  
      if(color){
        console.log("Color is a value")
      }
  
  //set to null
  color = null;
    console.log("color == null" + Boolean(color));
  
    }
    }
  }
  
  
  
  /* 
  Logical Operators
  && || !
  */
  
  function logicalSample(){
    let price = 200;
  
  //&& both sides have to be true
    if (price > 10 && price < 1600) {
      console.log("Price > 10 && price < 1600 is 'true'")
    }
  
  // or || only one side needs to be true to be true
    if (price > 10 || price < 1600) {
      console.log("price > 10 || price > 1600 is 'true'")
    }
  
    if (!(price < 10)){
      console.log("price < 10) is true")
    }
  }
  
  
  /* 
  Short Circuiting
  -optimization for logical expressions
  -bypasses subsequent expressions in && or || based on truthy or falsy
  
  && both sides must be true, to be true
  
  || only one needs to be true, to be true
  
  
  
  */
  
  
  
  /* 
  order of precedence
  -grouping, not!, *.
  -division, modulus, addition
  -subtraction, less than, less than or equal
  -greater than , equal, 
  -not equal, strict equal, 
  -and, or, assignment
  */