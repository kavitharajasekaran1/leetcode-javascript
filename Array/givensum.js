const fun = (arr, k) =>{
    let myMap = new Map();
    for(let i=0;i< arr.length;i++){
        let required = k - arr[i];
        if(myMap.has(required)) {
            return true;
        }else {
            myMap.set(arr[i], i);
        
        }
    }
    return false;
}

console.log(fun([10, 15, 3, 7], 17));
console.log(fun([1, -2, 1, 0, 5], 0))