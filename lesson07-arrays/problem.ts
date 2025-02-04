/* Remove Duplicates from an Array: Write a function called removeDuplicates that takes an array of numbers as input and returns an new array with all the duplicates removed. */
// // Examples:
// // removeDuplicates([1, 2, 3, 3, 4, 5]); // => [1, 2, 3, 4, 5]
// // removeDuplicates([1, 1, 1, 1, 1, 1]); // => [1]
// // removeDuplicates([1, 2, 3, 4, 5]); // => [1, 2, 3, 4, 5]
module.exports = function removeDuplicates(arr: number[]) : number[]{
  // your code here
  const uniquesArr : number[] = [];
  const obj : object = {};

  for(const currNum of arr) {
    if(!obj[currNum]) {
      uniquesArr.push(currNum)
    }
    obj[currNum] = true;
  }
   return uniquesArr;
};
