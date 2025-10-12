/*Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]

Output: 1*/
/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    
  let counts = nums.reduce((acc, item) => {
      
      acc[item] = (acc[item] ||0) +1
      return acc;
  }, {})
  
  console.log(counts);
    for(const item in counts) {
        if(counts[item] == 1) {
            return Number(item)
        }
    }
      
};