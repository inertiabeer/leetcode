/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
    let row=A.length;
    let column=A[0].length;
    var result=[];
    for(let index=0;index<column;index++)
    {
        result[index]=[];
    }
    var result=new Array(column).fill([]);
    for(var i=0;i<row;i++)
    {
        for(var j=0;j<column;j++)
        {
            result[j][i]=A[i][j];
        }
    }
    return result;
};
module.exports=transpose;