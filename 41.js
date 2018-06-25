/**
 * @param {number[]} nums
 * @return {number}
 */
//n*logn
var firstMissingPositive = function (nums) {
nums.sort((a,b)=>a-b);
var temp=1;
for(var i=0;i<nums.length;i++)
{
    if(nums[i]>0)
    {
        if(temp==nums[i])
        {
            temp++;
        }
        else {
            if(nums[i-1]&&nums[i]==nums[i-1])
            {

            }
            else {
       return temp;
            }
     
        }

    }
}
return temp;
};
// n 交换了值的做法
var firstMissingPositive = function (nums) {
    if(nums.length==0){
        return 1;
    }
    for(var i=0;i<nums.length;){
        let temp=nums[i]-1;
        if(temp<nums.length&&temp>=0&&nums[i]!=nums[temp]){
            [nums[temp],nums[i]]=[nums[i],nums[temp]];
        }
        else{
            i++;
        }
        
    }
    console.log(nums);
    for(var i=0;i<nums.length&&nums[i]>0&&nums[i]==(i+1);i++)
    {
    }
    return i+1;
};

module.exports=firstMissingPositive;