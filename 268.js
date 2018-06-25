/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
var n=nums.length;
var sum=0;
for(var i=0;i<=n;i++)
{
    sum+=i;
}
for(var i=0;i<n;i++)
{
    sum-=nums[i];
}
return sum;
};
module.exports=missingNumber;