const fun = arr =>{
    let n = arr.length; let result =[];
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++) {
            const subArray = arr.slice(i, j+1);
            result.push(subArray);
        
        }
    }
    return result;

}

console.log(fun([1,2,3]));
console.log(fun([1,2,3,4]));