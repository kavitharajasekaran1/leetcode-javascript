const fun = arr =>{
    arr.sort((a,b) => a -b);
    arr.pop();
    return arr[arr.length -1];
}

console.log(fun([1,2,3,4]))