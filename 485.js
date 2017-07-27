var findMaxConsecutiveOnes = function(nums) {
    var max=0;
    for(let i=0;i<nums.length;i++)
    {
        let current=0;
        while(nums[i]===1)
        {
            current++;
            i++;
        }
        if(current>max)
        {
            max=current;
        }

    }
    return max;
};
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));