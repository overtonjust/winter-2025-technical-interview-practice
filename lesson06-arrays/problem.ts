// Prompt: Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

/**
 * Checks if the largest element in the array is at least twice as much as every other number.
 * @param {number[]} nums - The integer array.
 * @returns {number} - The index the largest element if it meets the condition, otherwise -1.
 */
function checkLargestElement(nums : number[]) : number {
    if(nums.length == 0) return -1;
    const largest = Math.max(...nums);

    for(let i = 0; i < nums.length; ++i) {
        const curr = nums[i];
        if(curr * 2 > largest && curr !== largest) {
            return -1
        }
    }

    return largest;
}

module.exports = checkLargestElement;
