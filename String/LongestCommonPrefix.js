/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result =0; 
    let i =0;
    while(strs[0][i] && strs.every(word => word[i] === strs[0][i]))
        i++;
    
    return i> 0 ? strs[0].slice(0,i): ''
    
};