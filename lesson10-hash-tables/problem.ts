/**
 * Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * @param {number[]} nums - An array of integers.
 * @param {number} target - The target sum.
 * @return {number[]} - An array containing the indices of the two numbers that add up to the target.
 */
const twoSum = (nums: number[], target: number) : number[] => {
  // Your code here
  for(let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const complement = target - currNum;
    const complementIdx = nums.findIndex((num,idx) => num == complement && idx != i );

    if(complementIdx != -1) {
      return [i, complementIdx]
    }
  }

  return [-1]
};

const twoSumMap = (nums: number[], target: number) : number[] => {
  const map = new Map();

  for(let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if(map.has(complement)) {
      return [map.get(complement),i]
    }

    map.set(nums[i],i)
  }

  return[-1]
}


export { twoSum, twoSumMap } 
