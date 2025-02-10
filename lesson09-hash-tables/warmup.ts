// Prompt 1: Find if an item is repeated in an array. Given an array of integers, find if an integer appears more than once in the array.
const hasDuplicate = (nums: number[]) : boolean => {
    const numObj : object = {};

    for(let idx = 0; idx < nums.length; ++idx) {
        const curr = nums[idx];

        if(numObj[curr]) {
            return false;
        }

        numObj[curr] = true
    }

    return true;
};

// Prompt 2: Count occurrences of a letter from one string in another string. Given two strings, find the number of times a letter from the first string appears in the second string.
const countLetterOccurrences = (str1: string, str2: string) : object => {
    const letterOccurrences : object = {};
    const firstMap : object = {};

    for(let idx = 0; idx < str1.length; idx++) {
        firstMap[str1[idx]] = true;
    }

    for(let index = 0; index < str2.length; index++) {
        const curr = str2[index]

        if(firstMap[curr]){
            letterOccurrences[curr] = (letterOccurrences[curr] || 0) + 1
        }
    }

    return letterOccurrences;
};

// console.log(countLetterOccurrences('Jimmy', 'Jim Beanie'))


// Prompt 3: Find the maximum difference between two elements in an array. Given an array of integers, find the maximum difference between any two elements in the array.
const maxDifference = (nums: number[]) : number => {
    return Math.max(...nums) - Math.min(...nums)
};

// console.log(maxDifference([7,5,10,4,3,15]))
