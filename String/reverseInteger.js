/*Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let temp = x;
    
    if( x < 0) {
        x = Math.abs(x);
    }
    
            let result = Number(x.toString().split("").reverse().join(""))

    
    
    return temp < 0 ? -result : result;
    
};