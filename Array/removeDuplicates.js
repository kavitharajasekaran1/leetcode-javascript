var removeDuplicates = function(nums) {
    
    const sorted = nums.sort((a,b) => a-b);
    
    const uniqueArray = sorted.filter((item,index) => sorted.indexOf(item) === index);
    
    console.log(uniqueArray)
   
    return uniqueArray;
    
};