/**
 * justOneString()
 * ------------------------------------------------------
 * Using logical operators, write a function called `justOneString()`
 * that accepts two arguments and will return true if either input is a string,
 * but returns false if both arguments or neither are strings
 *
 *
 * Hint : you will need to use the `typeof` operator
 **/
function justOneString(value1, value2){
  var boolean;
  if(typeof value1 === "string" && typeof value2 === "string"){
    boolean = false;
  }
  else if(typeof value1 === "string" || typeof value2 === "string"){
    boolean = true;
  }
  else{
    boolean = false;
  }
  return  boolean;
}







/*-------------------TEST-1-------------------------*/
// function receives 2 strings
//    and returns boolean true if it is a vowel
/*--------------------------------------------------*/
console.assert(justOneString('peanut', 'butter') === false)


console.log("==== ex-08-isVowel : TEST 1 ====");
console.assert(justOneString('a', 5) === true)
console.assert(justOneString(6, 'dotron') === true)
console.assert(justOneString(8, true) === false)
