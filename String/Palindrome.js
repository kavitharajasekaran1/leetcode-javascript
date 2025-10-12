/*A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    if(s == ' ') {
        return true
    }
    else {
        console.log(s.toLowerCase().replace(/[^a-z0-9]/gi, ''))
        return s.toLowerCase().replace(/[^a-z0-9]/gi, '') === s.toLowerCase().replace(/[^a-z0-9]/gi, '').split('').reverse().join('');
    }
    
};