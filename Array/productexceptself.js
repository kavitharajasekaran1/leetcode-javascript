const fun = arr =>{
    let res = new Array(arr.length).fill(1);
    for(let i=0;i< arr.length;i++) {
        for(let j=0;j< arr.length;j++) {
            if( i !=j){
                res[i] *= arr[j]
            }
        }
    }
    return res;
}

console.log(fun([1,2,3,4]))