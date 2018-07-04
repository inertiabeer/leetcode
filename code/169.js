/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var temp={};
    for(var i=0;i<nums.length;i++)
    {
        if(temp[nums[i]]!==undefined)
        {
            temp[nums[i]]++;
            if(temp[nums[i]]>=nums.length/2)
            {
                return nums[i];
            }
        }
        else
        {
            temp[nums[i]]=1;
        }
    }
    return nums[0];
};