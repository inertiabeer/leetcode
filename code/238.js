/**
 * @param {number[]} nums
 * @return {number[]}
 */
//要排除为0的情况
// 最开始想到是找到乘积，然后除当前元素，发现有0的情况 要排除为0的情况
var productExceptSelf = function (nums) {
    var product=1;
    var zero_count=0;
    for(var i=0;i<nums.length;i++)
    {
        if(nums[i]!=0)
        {
        product=product*nums[i];
        }
        else {
            zero_count++;
        }

    }
    console.log(product);
    for(var j=0;j<nums.length;j++)
    {
        if(zero_count>=2)
        {
            nums[j]=0;
        }
        else if(zero_count==1&&nums[j]!=0){
             nums[j] = 0;
        }
        else if(nums[j]==0) {
              nums[j] = product ;
        }
        else {
            nums[j]=product/nums[j];
        }

    }
    return nums;
};
module.exports=productExceptSelf;