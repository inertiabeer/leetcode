/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    var result=[];
    var flag=false;
    for(let i=0;i<findNums.length;i++)
    {
        flag=false;
        var index=nums.indexOf(findNums[i]);
        for(let j=index+1;j<nums.length;j++)
        {
            if(nums[j]>findNums[i])
            {
                result.push(nums[j]);
                flag=true;
                break;

            }
        }
        if(!flag)
        {
            result.push(-1);
        }
    }
    return result;
};
console.log(nextGreaterElement([4,1,2],[1,3,4,2]));
