/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s :string ) : number => {
  // Your code here
  if(s.length === 0) {
    return 0
  }

  let currLongest = 0;
  let longest = 0;
  let obj = {};

  for(let i = 0; i < s.length; ++i) {
    const currChar = s[i];

    if(obj[currChar]) {
      if(longest < s.length - i) {
        currLongest = longest;
        obj = {}
        longest = 0
      } else {
        return longest
      }
    }

    obj[currChar] = 1
    longest++
  }


  return Math.max(currLongest, longest);
}

export { lengthOfLongestSubstring }
