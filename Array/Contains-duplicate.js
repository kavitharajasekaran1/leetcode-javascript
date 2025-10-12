/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  
    
    let counts = nums.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) +1;
        return acc;
    }, {});
    for(const item in counts) {
        if(counts[item] > 1) {
            return true
        }
        
    }
    return false;
    
};