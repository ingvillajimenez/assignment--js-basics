/**
 * getMinimum()
 * ------------------------------------------------------
 * Write a function called `getMinimum()` that takes 4 numbers as arguments
 * and returns the one with the lowest value.
 *
 **/
function getMinimum(num1, num2, num3, num4){
  var firstMin;
  var secondMin;
  if(num1 < num2){
    firstMin = num1;
  }
  else {
    firstMin = num2;
  }
  if(num3 < num4){
    secondMin = num3;
  }
  else {
    secondMin = num4;
  }
  if(firstMin < secondMin){
    return firstMin;
  }
  else {
    return secondMin;
  }
}


// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


/*-------------------TEST-1-------------------------*/
// function receives 4 number inputs
//    and returns the minimum value
/*--------------------------------------------------*/
console.log("==== ex-07-getMinimum : TEST 1 ====");


console.assert( getMinimum(1,2,4,0) === 0 )
console.assert( getMinimum(1,2,4,0) !== 1 )

console.assert( getMinimum(4,8,4,20) === 4 )

console.assert( getMinimum(300,-2,-99,0) === -99 )

console.assert( getMinimum(-5,-11,4,-5) === -11 )
