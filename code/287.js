
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    nums.sort();
    var temp = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if(nums[i]==temp)
        {
            return temp;
        }
        temp=nums[i];
    }
    return -1;
};