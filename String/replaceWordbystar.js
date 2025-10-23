/**
 * Finds all occurrences of a specific word in a sentence and replaces them
 * with a number of asterisks equal to the word's length.
 *
 * @param {string} sentence The input string to search within.
 * @param {string} word The word to find and replace.
 * @returns {string} The modified sentence.
 */
const replaceWordWithStars = (sentence, word) => {
    // The 'g' flag is for global replacement (all occurrences).
    // The '\\b' is a word boundary to avoid replacing parts of words.
    const regex = new RegExp('\\b' + word + '\\b', 'g');

    // The second argument to .replace() can be a function.
    // It will be called for each match, and its return value will be the replacement.
    // The first argument to the replacer function is the matched substring.
    const replacer = (matchedWord) => '*'.repeat(matchedWord.length);

    return sentence.replace(regex, replacer);
};

// Example from your request
let s = 'the cat sit on mat';
let w = 'cat';
console.log(`Original: "${s}"`);
console.log(`Result:   "${replaceWordWithStars(s, w)}"`); // Expected: "the *** sit on mat"


