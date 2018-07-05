/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//要求 包含了红，白，蓝的数组进行排序
//单次扫描，恒定空间，针对这道题
var sortColors = function (nums) {
    var start=0;
    var end=nums.length-1;
    for(let i=0;i<=end;)
    {
        switch (nums[i]) {
            case 0:
            nums[i]=nums[start];
            nums[start]=0;
            start++;
            i++;
    
            break;
            case 1:
            i++;

            break;
            case 2:
            nums[i]=nums[end];
            nums[end]=2;
            end--;
            break;
        
            default:
                break;
        }
    }
};
module.exports=sortColors;