/* 
For In: 
-iterates over elements of objcet (properties and methods)
-returns key (property/method name)
-object[key] returns value
*/

//for In example
function forInSample(){
    //object declaration with method
    let product = {
      "productID": 680,
      "name": "Road Frame",
      "productNumber": "FR-22",
      "color": "black",
      "stdcost": 1000,
      "listprice": 1421,
      calculateGrossProfit: function(){
        return this.listPrice - this.standardCost;
      }
    };
    //in says iterate over collection of properties and objcets and return key 
    for (const key in product) {
      console.log("'" + key + "=" + product[key]);
    }
  }
  
  
  
  
  
  /*
  For Of
  -iterates over values in iterable object - array, string
  -returns object for each iteration
  */
  
  //for of example
  function forofSample(){
    //of says to iterate over iterable object, array
    for (const item of _products) {
      //json.stringify to emit object to console or send to backend
      console.log(JSON.stringify(item));
    }
  }
  
  //looping over a string
  //string is iterable object
  function loopStringSample(){
    let productName = "HL Road";
    let letters = "";
    //loop const char of productName
    //treating string as iterable object, each char 
    //add to letters 
    for (const char of productName) {
      letters += char;
    }
    console.log(letters);
  }
  
  /*
  Break 
  -leave a loop early
  
  Continue
  -next ieration of a loop
  
  */
  
  //breaks sample
  function breakSample(){
    //for array of product objects, 
    //check if std cost is less than 20
    //if it is, break out of loop
    for (const item of _products) {
      if (item.standardCost < 20) {
        break;
      }
      console.log(JSON.stringify(item));
    }
  }
  
  // in example with first product over 1000, only this one is printed
  
  
  //continue sample, opposite of break
  //continue goes back into loop and increments internal variable keeping track of which item is the current one
  
  function continueSample(){
    for (const item of _products) {
      if (item.standardCost > 1000) {
        continue;
      }
      console.log(JSON.stringify(item));
    }
  }
  
  // in example with first product over 1000, only last two under 1000 are printed. first one skipped
  
  
  
  
  
  
  /*
  
  Labeled Statements
  -defines a location to "goto"
  -not recommended for use
  */
  
  
  //label statement example
  //label is whatever name with colon
  function labelSample() {
    //even is label
    even:
    for (let index=1; index <=10; index++) {
      if (index % 2 ==1) {
        continue even;
        //goes to label, not point in loop
      }
      console.log(index)
    }
  }
  
  //only even numbers
  //spaghetti code, always refactor, never use label
  
  