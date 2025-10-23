const fun = arr =>{
    arr.sort((a,b) => a -b);
    return arr[arr.length -1] * arr[arr.length -2]* arr[arr.length - 3]
}

console.log(fun([10, 3, 5, 6, 20]));

console.log(fun([-10, -3, -5, -6, -20]))