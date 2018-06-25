/**
 * @param {number[]} nums
 * @return {number[]}
 */

 //题目是从1到n n为数组长度，中缺少了一部分的元素，找出来
 //第一步 建立一个映射关系，i是从0到n-1的。num[i]理论上是从1到n的(先不考虑缺失的)
 //这两个长度一样
 //i>nums[i];nums[nums[i]-1]设为负值;那么数组中没有变成负数的部分，就是那个缺少的nums[i]
var findDisappearedNumbers = function (nums) {
    var result=[];
    for(let i=0;i<nums.length;i++)
    {
        
            var index=Math.abs(nums[i])-1;
            nums[index]=-Math.abs(nums[index]);
    }
    for(var j=0;j<nums.length;j++)
    {
        if(nums[j]>0)
        {
            result.push(j+1);
        }
    }
    return result;
};
module.exports=findDisappearedNumbers;