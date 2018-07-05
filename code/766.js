/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    let m = matrix[0].length;
    let n = matrix.length;
    //只需要对矩阵的两边进行处理
    let i = 0;
    for (var j = 0; j < m; j++) {

        let temp_i = i + 1;
        let temp_j = j + 1;
        while (temp_i < n && temp_j < m) {
            if (matrix[i][j] != matrix[temp_i][temp_j]) {
                return false;
            }
            temp_i++;
            temp_j++;
        }

    }
    j=0;
    for ( i = 0; i < n; i++) {

        let temp_i = i + 1;
        let temp_j = j + 1;
        while (temp_i < n && temp_j < m) {
            if (matrix[i][j] != matrix[temp_i][temp_j]) {
                return false;
            }
            temp_i++;
            temp_j++;
        }

    }
    return true;
    


};
module.exports=isToeplitzMatrix;