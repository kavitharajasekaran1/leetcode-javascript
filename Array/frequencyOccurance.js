const frequency = arr =>{
  let myMap = new Map();
  for(const item of arr) {
    myMap.set(item, (myMap.get(item) || 0) +1)
  }
  return myMap;

}

console.log(frequency([1,2,3,1,3,3,4]));