/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
//最初设想，用on3的时间复杂度去计算
var fourSum = function (nums, target) {
    var result=[];
    nums.sort((a,b)=>a-b);
    var hash={};//用来去除重复元素
    for(var i=0;i<nums.length-3;i++)
    {
        for(var j=i+1;j<nums.length-2;j++)
        {
            var start=j+1;
            var end=nums.length-1;
            while(start<end)
            {
                var sum=nums[i]+nums[j]+nums[end]+nums[start];
                if(sum>target)
                {
                    end--;
                }
                else if(sum<target){
                    start++;
                }
                else {
                    var temp = [nums[i], nums[j], nums[start], nums[end]];
                    if(hash[temp])
                    {
                    start++;
                    end--;
                    }
                    else {
                    hash[temp]=1;
                    result.push(temp);

                    }

                }
                
            }
        }
    }

    return result;
};
module.exports=fourSum;