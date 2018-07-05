/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var pair={};
    var result=[];
    for(let i=0;i<nums.length;i++)
    {
        if( nums[i] in pair)
        {
            result.push(nums[i])
        }
        else
        {
            pair[nums[i]]=1;
        }
    }
    return result;
};