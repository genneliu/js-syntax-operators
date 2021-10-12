

// break says to continue
//if no cases match, go to default
//default can be anywhere. but usually at end


//simple switch statement

function simpleSwitch () {
    let productId = 2 
    
      switch(productId) {
        case 1: 
        console.log("Product 1");
        break;
        case 2: 
        console.log("Product 2");
        break;
      default:
      console.log("Unknown")
      break;
      }
    
    }
    
    //multiple case statements
    //hit break to break out of switch
    
    function mutipleCase() {
      let color = "red";
    
      switch(color){
        case "red":
        case "pink":
          console.log("The color is red");
          break;
        case "blue":
        case "light blue"
        case "dark blue"
          console.log("the color is blue")
          break;
        case "grey":
        case "gray":
          console.log("The color is grey")
          break;
        default:
          console.log("unknown color")
      }
    }
    
    //strict comparison, type and value must match
    
    function strictComp() {
      let productID = "2";
      //string 2 will get unknown, string != 2 numeric
    
      switch (productID) {
        case 1:
          console.log("Black, 56")
          break;
        case 2:
          console.log("Helmet, red");
          break;
        case 3: 
          console.log("Mountain Bikes");
          break;
        default:
        console.log("Unknown product")
      }
    }
    
    
    //block level scope
    // switch is a block, but each case is not
    //make statements a block by wrapping in braces
    
    //block level scope demo
    
    /*case statements are not block, message in each case statement
    message has been declared 
    
    
    function blockScopeProblem() {
      let productID = 2;
    
      switch(productID) {
        case 1: 
          let message = "HL Road";
          console.log(message);
          break;
        case 2: 
          let message = "Sport helmet";
          console.log(message);
          break;
        case 3:
          let message = "Mountain socks";
          console.log(message);
          break;
        default:
        let message = "Unknown product";
        console.log(message);
        break;
      }
    }
    */
    
    //to avoid block variable issue, add braces
    //braces create a block
    
    function blockScopeProblem() {
      let productID = 2;
    
      switch(productID) {
        case 1: {
          let message = "HL Road";
          console.log(message);
          break;
        }
        case 2: {
          let message = "Sport helmet";
          console.log(message);
          break;
        }
        case 3: {
          let message = "Mountain socks";
          console.log(message);
          break;
        }
        default:
        let message = "Unknown product";
        console.log(message);
        break;
      }
    }
    
    //switch statements better for readability
    //more efficient than mutiple if else
    //careful with block level scope
    //