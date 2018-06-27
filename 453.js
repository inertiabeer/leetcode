/**
 * @param {number[]} nums
 * @return {number}
 */
//数学方法
//(n)*n/2 /(n-1)
var minMoves = function (nums) {
let n=nums.length;
let sum=0;
let min=nums[0];
for(var i=0;i<n;i++)
{
    sum+=nums[i];
    if(nums[i]<min)
    {
        min=nums[i];
    }


}
return sum-min*n;
};