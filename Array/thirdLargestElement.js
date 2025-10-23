const fun = arr =>{
arr.sort((a,b)=> a-b);
const res = arr.slice(0, -2);
return res[res.length-1]


}
console.log(fun([1,2,3,4]))