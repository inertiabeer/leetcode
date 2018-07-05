/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 排序后遍历数组，另外两个指针从数组的i+1和end开始遍历
var threeSumClosest = function (nums, target) {
    nums.sort((a,b)=>a-b);
    var clost=Number.MAX_VALUE;
    for(var i=0;i<nums.length-2;i++)
    {
        var start=i+1,end=nums.length-1;
        while(start<end)
        {
            var temp = nums[i] + nums[start] + nums[end];
            if (Math.abs(temp - target) < Math.abs(clost-target)) {
                clost=temp;
            }
            if(temp>target)
            {
                end--;
            }
            else if(temp<target)
            {
                start++;
            }
            else 
            {
                return target
            }
        }

    }
    return clost;

};
module.exports=threeSumClosest;