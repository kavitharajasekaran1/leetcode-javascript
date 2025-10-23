function repeatVowels(str) {
    let res ='';
    let vowels = ['a', 'e', 'i','o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for(let i=0;i< str.length;i++) {
        res += vowels.includes(str[i]) ? str[i]+str[i] : str[i]
    }
    return res;
}

console.log(repeatVowels('hello')) //output: 'heelloo'