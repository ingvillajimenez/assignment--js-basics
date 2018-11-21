/**
 * isVowel()
 * ------------------------------------------------------
 * Write a function called isVowel() that returns true/false for
 * whether a character is a vowel or not.
 *
 **/

function isVowel(character){
  var value;
  var vowels = character.toLowerCase();
  switch(vowels){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      value = true;
      break;
    default:
      value = false;
  }
  return value;
}



// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


/*-------------------TEST-1-------------------------*/
// function accepts string input
//    and returns boolean true if it is a vowel
/*--------------------------------------------------*/
console.log("==== ex-08-isVowel : TEST 1 ====");
console.assert(isVowel('a') === true);
console.assert(isVowel('e') === true);
console.assert(isVowel('i') === true);
console.assert(isVowel('o') === true);
console.assert(isVowel('u') === true);


/*-------------------TEST-2-------------------------*/
// function receives string input
//    and returns boolean false if it is NOT a vowel
/*--------------------------------------------------*/
console.log("==== ex-08-isVowel : TEST 2 ====");

console.assert(isVowel('x') === false);
console.assert(isVowel('n') === false);

/*-------------------TEST-3-------------------------*/
// function will return true if passed
//   an uppercase vowel
/*--------------------------------------------------*/
console.log("==== ex-08-isVowel : TEST 3 ====");
console.assert(isVowel('A') === true);
console.assert(isVowel('E') === true);
console.assert(isVowel('U') === true);
