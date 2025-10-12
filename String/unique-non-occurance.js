/*Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"

Output: 0

Explanation:

The character 'l' at index 0 is the first character that does not occur at any other index. */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let temp = s.split("");
    let result = [];
    let np = false;
    
    for(let i=0;i< temp.length;i++) {
        let var1 = temp[i]
        np =false
  for(let j=0 ;j< temp.length;j++)
      { if (j !== i) {
        if (var1 == temp[j]) 
        { np = true
            break
         
             }
      }
      
        }
        if (np == false ) {
              return i
          }
    }   
    return -1; 
    
};

/* alternative solution*/

var firstUniqChar = function(s) {
    let myMap = new Map();
    for(const char of s) {
        
        myMap.set(char, (myMap.get(char) ||0) +1)
        
    }
    
  let myValues = Array.from(myMap);
    const firstValue = myValues.find(item => item[1] == 1)
    
     return firstValue && firstValue[0] && s.indexOf(firstValue[0]) > -1 ? s.indexOf(firstValue[0]) : -1
};