//using math and comparison operators
//math
//assignment
//comparison
//strict

/*
math operators: add, sub, mutl, div, expon, modulus. incremenet, decrement -- 
*/

/* 
number + string
100 + "200"; default concatenation


assignment operators =+ =+ *=
*/

/*comparisons
=== equal in value and type
== equal in value

*/

//ternary like if/else on one line
//result = exp? (exp is true) : (exp is false)
result = price < 1500 ? "'less than 1500'" : "'greater than 1500'";
console.log("ternary =" + result);



/* 
use strict, help keep apps running 
-ignored by old browsers
-forces all variables to be declared
-mistyped variable names are created globally scoped

rules:
=must declare variables before using, must use =var or let or const
=cant use reserved words as variables (eval, argument)
=cant delete variable
=cant delete functino
*/


//demo
function useStrictSample() {
  'use strict';
}