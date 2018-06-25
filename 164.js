/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
    if(nums.length<2)
    {
        return 0;
    }
    nums.sort(function(a,b){
        return a-b;
    });
    let result = 0;
    for (let i = 1; i < nums.length; i++) {
        result = Math.max(result, nums[i] - nums[i - 1])
    }
    return result;
};
module.exports=maximumGap;