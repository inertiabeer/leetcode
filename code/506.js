/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
    nums.sort(function(a,b){
        return b-a;
    });
    let result = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    for(let i=0;i<nums.length;i++)
    {
        if(i>=3)
        {
            result[i]=(i+1).toString();
        }
    }
    return result;
};