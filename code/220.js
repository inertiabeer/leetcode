/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    var flag = false;
    for (var i = 0; i < nums.length; i++) {
        let item = nums[i];
        // 这时候对t范围之内的整数进行遍历
        for(var j=i+1;j<=i+k;j++)
        {
            if(j>=nums.length)
            {
                break;
            }
            if (Math.abs(nums[j] - item) <= t)
            {
                  flag = true;
            }
        }

    }
    return flag;
};
module.exports = containsNearbyAlmostDuplicate;