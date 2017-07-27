/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var result=0;
    var row=grid.length;
    var col=grid[0].length;
    for(let i=0;i<row;i++)
    {
        for(let j=0;j<col;j++)
        {
            if(grid[i][j]===1)
            {
                result=result+4;
                if (i < row - 1 && grid[i + 1][j] == 1) result=result-2;
                if (j < col - 1 && grid[i][j + 1] == 1) result=result-2;
            }
        }
    }
    return result;

};