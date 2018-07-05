/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 这个很明显就是一个sliding window
 */

var findMaxAverage = function(nums, k) {
    var sum=0;
    var max=0;
    for(var i=0;i<k;i++)
    {
        sum=sum+nums[i];
        max=sum;
    }
    for(var i=k;i<nums.length;i++)
    {
        sum=sum+nums[i]-nums[i-k];
        max=Math.max(max,sum);
    }
    return max/k;
};