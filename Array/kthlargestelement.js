const fun = (arr,k) =>{
    arr.sort((a,b) => b-a);
    console.log(arr)
    let res = arr.slice(0, k);
    return res.join(' ');

}

console.log(fun([1, 23, 12, 9, 30, 2, 50], 4))