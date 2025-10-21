const fun = matrix =>{
    let digonal =[];
    let n = matrix.length;
    for(let i=0;i<n;i++) {
        digonal.push(matrix[i][i]);
        if(i !== n-1-i){
            digonal.push(matrix[i][n-1-i]);

        }
    }
    return Math.max(...digonal);

}

/**
 * Finds the single center element of a matrix.
 * Returns the element only if the matrix has an odd number of rows and columns.
 *
 * @param {number[][]} matrix The input matrix.
 * @returns {number | null} The center element, or null if a single center doesn't exist.
 */
const getMatrixCenter = (matrix) => {
    const rows = matrix.length;
    if (rows === 0) return null;
    const cols = matrix[0].length;

    if (rows % 2 !== 0 && cols % 2 !== 0) {
        const centerRow = Math.floor(rows / 2);
        const centerCol = Math.floor(cols / 2);
        return matrix[centerRow][centerCol];
    }
    return null; // No single center
};

const anotherMatrix = [
    [3, 5, 17],
    [4, 9, 1],
    [8, 6, 2]
];
console.log("Max diagonal element:", getMaxDiagonalElement(anotherMatrix));
console.log("Center element:", getMatrixCenter(anotherMatrix));