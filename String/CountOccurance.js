const CountOccurance = (str, char) =>{
    return str.split(char).length -1;
}

console.log(CountOccurance('dummy', 'm'))