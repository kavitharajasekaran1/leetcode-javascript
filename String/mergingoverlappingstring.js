


/**
 * Finds the longest overlap where the suffix of s1 is a prefix of s2,
 * and merges them into the shortest possible superstring.
 *
 * @param {string} s1 The first string.
 * @param {string} s2 The second string.
 * @returns {string} The merged string.*/
 const fun = (word1, word2) =>{
    let max = Math.min(word1.length, word2.length);
    for(let len = max;len >0;len--){
        let suff = word1.slice(word1.length - len);
        let pref = word2.slice(0, len);
        if(suff === pref){
            return word1 + word2.slice(len);
        }
    
    }
    return word1 + word2
}

console.log(fun('sunshine', 'shinebright')) //output: sunbright