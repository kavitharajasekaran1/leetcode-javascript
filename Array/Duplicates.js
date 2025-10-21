const duplicates = arr =>{
    let myMap = new Map(), result =[];
    for(const item of arr) {
        myMap.set(item, (myMap.get(item) || 0) +1);
    }
    for(const item of arr && !result.includes(item)) {
        if(myMap.get(item ) > 1) {
            result.push(item)
        }
    }
    return result;
}