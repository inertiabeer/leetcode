/**
 * @param {number[]} nums
 * @return {number}
 */
//集合S[i]  {a[i],a[a[i]]}
var arrayNesting = function (nums) {
    var max=0;
    var visited=[];
    for(var i=0;i<nums.length;i++)
    {
        if(visited[i])
        {
            continue;
        }
            var result = 0;
            let s_index = nums[i];
            do {
                result++;
                visited[s_index]=true;
                s_index = nums[s_index];
            }
            while(s_index!=nums[i])
            if(result>max)
            {
                max=result;
            }

    }

    return max;
};

module.exports=arrayNesting;