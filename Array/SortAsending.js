const SortAsending = arr =>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]> arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
    }
    }
        return arr;


}
/* Alternative */

const SortAsendingOrder = arr =>{
  return arr.sort((a,b) => a-b);
}

console.log(SortAsendingOrder([6,7,2,3,5,9]))
