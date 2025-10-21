const fun = (arr, k) =>{
    let result =[];
    let subArray =[];
    for(let i=0;i< arr.length;i++) {
        for(let j=i;j<arr.length;j++){
        subArray.push(arr.slice(i, j+1))
        
        if(arr.slice(i, j+1).reduce((a, b) => a+b) === k) {
            result.push(arr.slice(i, j+1))
        

        }
    }
    }
    return result;
    
}