/**
 * Checks if a matrix is a Toeplitz matrix.
 * A matrix is Toeplitz if every diagonal from top-left to bottom-right is constant.
 *
 * @param {number[][]} matrix The input matrix (m x n).
 * @returns {boolean} True if the matrix is a Toeplitz matrix, false otherwise.
 */
function isToeplitzMatrix(matrix) {
  // Handle edge cases: an empty matrix or a matrix with only one row/column
  // is always considered a Toeplitz matrix.
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return true;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  // Iterate through each element of the matrix.
  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      // Compare the current element with its top-left neighbor.
      // If they are not the same, it's not a Toeplitz matrix.
      if (matrix[r][c] !== matrix[r - 1][c - 1]) {
        return false;
      }
    }
  }

  // If all top-left to bottom-right diagonals are constant, return true.
  return true;
}

// --- Example Usage ---

// Example 1: This is a Toeplitz matrix, so it should return true.
const toeplitzMatrix = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2]
];

console.log("Is matrix 1 a Toeplitz matrix?", isToeplitzMatrix(toeplitzMatrix));
// Expected Output: Is matrix 1 a Toeplitz matrix? true

/*
  Diagonals:
  [9]
  [5, 5]
  [1, 1, 1]
  [2, 2]
  [3, 3]
  [4]
  All are constant.
*/


// Example 2: This is NOT a Toeplitz matrix, so it should return false.
const nonToeplitzMatrix = [
  [1, 2],
  [2, 2]
];

console.log("Is matrix 2 a Toeplitz matrix?", isToeplitzMatrix(nonToeplitzMatrix));
// Expected Output: Is matrix 2 a Toeplitz matrix? false

/*
  The element at [1][0] is 2.
  The main diagonal starting at [0][0] is [1, 2], which is not constant.
  The check will fail at matrix[1][1] (2) !== matrix[0][0] (1).
*/
