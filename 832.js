/**
 * @param {number[][]} A
 * @return {number[][]}
 */
//要求，先水平翻转矩阵的每一行，然后进行取反
var flipAndInvertImage = function (A) {
    for(var i=0;i<A.length;i++)
    {
        A[i].reverse();
        for(var j=0;j<A[i].length;j++)
        {
            A[i][j]=(A[i][j]==0?1:0);
        }
    }
    return A;
};