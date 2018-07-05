/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {

    if(!nums)
    {
        return nums;
    }
    var result=[];
    if(r*c!==nums.length*nums[0].length)
    {
        return nums;
    }
    else
    {
        var row=0;var col=0;
        for(let i=0;i<r;i++)
        {
            result.push([])//这是给ｒｅｓｕｌｔ里面添加空数组
        }
        for(var numsRow=0;numsRow<nums.length;numsRow++)
        {
            for(var numsCol=0;numsCol<nums[0].length;numsCol++)
            {
                result[row][col]=nums[numsRow][numsCol];
                col++;
                if(col===c)
                {
                    col=0;
                    row++;
                }
            }
        }
        return result;



    }
};