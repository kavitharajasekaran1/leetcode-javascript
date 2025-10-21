const fun = str =>{
    let myMap = new Map();
for(const item of str) {
    let sorted = item.split('').sort().join();
    if(!myMap.has(sorted)){
        myMap.set(sorted, [])
    }
    myMap.get(sorted).push(item)
}
return Array.from(myMap.values());

}
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(fun(words));