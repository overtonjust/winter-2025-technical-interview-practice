// Prompt 1: Sum of Array Write a function called sumArray that takes an array of numbers as input and returns the sum of all the numbers in the array.

const sumArray = (nums : number[]) : number => {
    return nums.reduce((total, currNum) => total += currNum , 0);
} 

// console.log(sumArray([1,2,3,4,5])) // 15

// Prompt 2: Find Maximum Write a function called findMax that takes an array of numbers as input and returns the maximum number in the array.

const findMax = (nums : number[]) : number => {
    return Math.max(...nums);
};

// console.log(findMax([1,2,3,4,5])) // 5


// Prompt 3: Reverse Array Write a function called reverseArray that takes an array as input and returns a new array with the elements in reverse order.

const reverseArray = (arr: any[]) : any[] => {
    return arr.reverse();
}; 

// console.log(reverseArray([1,2,3,4,5])) // [5,4,3,2,1]