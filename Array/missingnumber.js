const fun = arr =>{
    let sorted = arr.sort((a,b) => a-b);
   for(let i= sorted[0];i<sorted[sorted.length-1];i++) {
    if( i !== i+1){
        return i+1;
    }
   }


}
let arr = [4,6,7,8,9,10]

console.log(fun(arr))