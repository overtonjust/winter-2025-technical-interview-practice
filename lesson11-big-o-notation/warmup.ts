// Prompt 1: Find if an item is repeated in an array. Given an array of integers, find if an integer appears more than once in the array.
const hasDuplicate = (nums : number[]) : boolean => {
    const uniques = new Set([...nums]);

    return uniques.size != nums.length;
};

// console.log(hasDuplicate([1,2,3,4]))

// Prompt 2: Count occurrences of a letter from one string in another string. Given two strings, find the number of times a letter from the first string appears in the second string.
const countLetterOccurrences = (str1: string, str2: string)  => {
    const letterCounts = {};

    for(const letter of str2) {
        if(str1.match(letter)) {
            letterCounts[letter] = (letterCounts[letter] || 0) + 1;
        }
    }

    return letterCounts
};

// console.log(countLetterOccurrences('jim', 'jim beanie'))

// Prompt 3: Find the maximum difference between two elements in an array. Given an array of integers, find the maximum difference between any two elements in the array.
const maxDifference = (nums: number[]) : number => {
    return Math.max(...nums) - Math.min(...nums);
};

// console.log(maxDifference([2,3,4,1,200,2,5]))
