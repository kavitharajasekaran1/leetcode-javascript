const fun = arr =>{

    let currentMax =0;
    let max =0;
    for(let i=0;i<arr.length-1;i++) {
        currentMax = arr[i]*arr[i+1];
        if(currentMax > max) {
            max = currentMax;
        }

    }
    return max;


}

console.log(fun([2,3,7,4]))