/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    let top_view=[];
    let left_view=[];
    for(var i=0;i<grid.length;i++)
    {
        let left_item=0,top_item=0;
        for(let j=0;j<grid[i].length;j++)
        {
            if(grid[i][j]>left_item)
            {
                left_item=grid[i][j];
            }

            if (grid[j][i] > top_item) {
                top_item = grid[j][i];
            }
        }
        left_view.push(left_item);
        top_view.push(top_item);
    }
    let result=0;
    for(var i=0;i<grid.length;i++)
    {
        var leftsky=left_view[i];
        for(var j=0;j<grid[i].length;j++)
        {
            if(leftsky>top_view[j])
            {
                console.log(top_view[j]-grid[i][j]);
                result = result + (top_view[j] - grid[i][j]);
            }
            else 
            {
                result = result + (leftsky - grid[i][j]);   
            }
        }
    }
    return result;
    
};
maxIncreaseKeepingSkyline([[8, 4, 8, 7],
[7, 4, 7, 7],
[9, 4, 8, 7],
[3, 3, 3, 3]]
)