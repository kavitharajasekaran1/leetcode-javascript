/**
 * Finds the maximum number of consecutive identical binary elements (0s or 1s) in an array.
 *
 * @param {number[]} arr - The input array of binary numbers (0s and 1s).
 * @returns {number} The length of the longest consecutive sequence of identical elements.
 */
const findMaxConsecutiveBinary = (arr) => {
    // Handle edge cases for empty or single-element arrays
    if (!arr || arr.length === 0) {
        return 0;
    }

    let maxConsecutive = 1; // Stores the maximum consecutive count found so far
    let currentConsecutive = 1; // Stores the current consecutive count

    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentConsecutive++; // Increment if the current element is the same as the previous
        } else {
            maxConsecutive = Math.max(maxConsecutive, currentConsecutive); // Update max if current sequence is longer
            currentConsecutive = 1; // Reset current count for the new sequence
        }
    }

    // After the loop, compare the last sequence's count with maxConsecutive
    return Math.max(maxConsecutive, currentConsecutive);
};

console.log(findMaxConsecutiveBinary([1, 1, 0, 0, 0, 0, 1, 1, 1])); // Expected output: 4 (for the four 0s)
console.log(findMaxConsecutiveBinary([1, 1, 1, 1, 1])); // Expected output: 5
console.log(findMaxConsecutiveBinary([0, 0, 0])); // Expected output: 3
console.log(findMaxConsecutiveBinary([1, 0, 1, 0])); // Expected output: 1
console.log(findMaxConsecutiveBinary([])); // Expected output: 0
console.log(findMaxConsecutiveBinary([1])); // Expected output: 1
