const fun = (arr, k) =>{
    for(let i=0;i< k;i++){
        let first = arr.shift();
        arr.push(first);
    
    }
    return arr;
}

console.log(fun([1,2,3,4,5,6,7], 3));