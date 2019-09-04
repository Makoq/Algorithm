//先转置，后颠倒

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let i=0;i<matrix.length;i++){
        for(let j=i;j<matrix[0].length;j++){
            let tep
            
            tep=matrix[i][j]

            matrix[i][j]=matrix[j][i]

            matrix[j][i]=tep

        }
    }

    for(let k=0;k<matrix.length;k++){
        matrix[k].reverse()
    }

    return matrix
};