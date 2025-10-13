const fun = str =>{
    let myResult = {};
    for(const char of str) {
        myResult[char] = (myResult[char] ||0) +1;
    }
    for(const char of str) {
        if(myResult[char] == 1) {
            return char;
        }
    }
    return -1;
}

console.log(fun('GeeksForGeeks'));