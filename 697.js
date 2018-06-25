/**
 * @param {number[]} nums
 * @return {number}
 */
// degree定义为最多元素出现的频率
// 找到degree相同的子数组（连续）
var findShortestSubArray = function (nums) {
    var hash={};
    for(var i=0;i<nums.length;i++)
    {
        if(hash[nums[i]])
        {
            hash[nums[i]]++;
        }
        else {
            hash[nums[i]]=1;
        }
    }
    var max=0;
    // degree
    for(var i in hash)
    {
        if(hash[i]>max)
        {
            max=hash[i];
        }
    }
    if(max==1)
    {
        return 1;
    }
    // 每一个开始
    var visited=Array(nums.length).fill(false);
    var min=nums.length;
    for(let i=0;i<nums.length;i++)
    {
        if((hash[nums[i]]==max)&&(visited[i]==false))
        {
            visited[i]=true;
            var temp_value=nums[i];//degree对应的值
            var start=i;
            for(let j=i+1;j<nums.length;j++)
            {
                if(nums[j]==temp_value)
                {
                    visited[j] = true;
                    end=j;
                }
            }
            min=Math.min(end-start+1,min);
            
        }
    }
    return min;

};
module.exports = findShortestSubArray;