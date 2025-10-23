let arr = [4,5,6,7,2, 5,9, 8, 10, 4]; let k = 3;

let res =[]; let i=0;
while(i< arr.length) {
   if(i >= k && arr.length - (i) < k) {
    res.push(arr.slice(i, arr.length));
    break;
   }
   let sub = arr.slice(i, i+k);
    res.push(sub.reverse());
    i+=k;

}
console.log(res)
