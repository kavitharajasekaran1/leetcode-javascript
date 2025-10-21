/*Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2] */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
   nums1.sort((a,b) => a-b);
    nums2.sort((a,b) => a-b);
    
    let i=0, j=0;
    let result =[];
    
    while(i<nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]) {
            i++
        } else if(nums2[j] < nums1[i]) {
            j++;
        }
        else {
            result.push(nums1[i]);
            i++;
            j++
        }
    }
    return result;
    
};
