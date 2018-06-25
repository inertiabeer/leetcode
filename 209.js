/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
//向中间滑
var minSubArrayLen = function (s, nums) {
    let sum = 0;
    let min=Number.MIN_VALUE;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];

    }
    if(sum<s)
    {
        return 0;
    }
    var start = 0,
        end = nums.length - 1;
    while (start < end) {
        if(sum<=s)
        {
            
        }
    }
    return min==Number.MIN_VALUE?0:min;
};