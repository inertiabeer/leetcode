var searchInsert = function(nums, target) {
    var target_index=0;
    for (var i=0;i<nums.length;i++)
    {
        if(target<nums[i])
        {
            return target_index;
        }
        if(target===nums[i])
        {
            return i;
        }
        if(target>nums[i])
        {
            target_index++;
        }
    }
    return target_index;
};