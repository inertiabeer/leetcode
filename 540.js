/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    for(var i=0;i<nums.length;i=i+2)
    {
        if(nums[i]!==nums[i+1])
        {

            return nums[i];
        }
    }
};
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));