/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(!numRows)
    {
        return []
    }
    var result=[];
    for(var i=0;i<numRows;i++)
    {
        result.push([]);

    }
    result[0].push(1);
    if(numRows===1)
    {

        return result;
    }
    for(var j=1;j<numRows;j++)//第二行开始
    {
        result[j][0]=1;
        result[j][j]=1;
        if(j>=2)
        {
            for(let index=1;index<j;index++)
            {
                result[j][index]=result[j-1][index-1]+result[j-1][index];
            }
        }
    }
    return result;
};