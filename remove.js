var removeDuplicates = function(nums)
{
    let b={};
    for(let i=0;i<nums.length;)
    {
        if(!b[nums[i]])
        {
            b[nums[i]]=1;
            i++
        }
        else
        {
            nums.splice(i,1);

        }
    }
    console.log(nums);
    return nums.length;
};
console.log(removeDuplicates([1,1,1]));