
// Using recursion, return the number of occurences of a character in a given string.
// Your function should be case-sensitive, meaning that searching for an upper-case
// letter should yield different results than the results for that letter's lower-case
// counterpart. Your function should also expect to handle punctuation, whitespace,
// and escaped characters.
//
// Examples:
//   charCount('k', 'My keen Korean kitty knows not to kick my knees.');
//   // returns 6
//   charCount('K', 'My keen Korean kitty knows not to kick my knees.');
//   // returns 1
//   charCount('!', 'O frabjous day! Calloo! Callay!');
//   // returns 3
//   charCount(' ', 'The quick brown fox jumped over the lazy dog.');
//   // returns 8
//   charCount ('\'', 'Sally says \'sell your silverware.\'');
//   // returns 2

// var charCount = function (character, string) {
// 	// create a variable for returning the number
  
//   // create a helper function for checking if a string has the character.
//   	// splice 1 character out. 
//     // check if the character matches the input
//    	 // increment the result param by 1
//     // condition check if the end of string is reached, then return the results param.
//     	// return the helper function recursively with the remaining string and results param.
  
//   // Helper function takes the string & the return value as params. 

//   // return the number
// };

// .split("") -> array with all characters in the string
// .slice(beginning, end)

var charCount =  function (character, string) {
    var results = 0;
  function searchStr (str, result) {
  	if (!str) {
      return result;
    }
    var c;
    c = str.slice(0,1);
    if (c === character) {
    	result = result ? result += 1 : 1;
    }
    
    str = str.slice(1);
    return searchStr(str, result);
  }
  return searchStr(string, results);
}

console.log(charCount('a', 'abcca \" a'));
console.log(charCount('a', 'aa'));




