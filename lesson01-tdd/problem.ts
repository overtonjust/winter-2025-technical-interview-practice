/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
export function isPalindrome(str) {
  // your code here
  if(typeof str !== 'string') {
    throw TypeError('function must receive a string');
  };

  if(str.charAt(0).toLowerCase() !== str.charAt(str.length - 1).toLowerCase()) {
    return false;
  }

  const strArr = str.split('');
  let chars : string[] = [] ;

  for(let i = 0; i < strArr.length; i++) {
    if(strArr[i].match(/[A-Za-z0-9]/g)) {
      chars.push(strArr[i].toLowerCase())
    }
  }

  return chars.join('') == chars.reverse().join('');

}

