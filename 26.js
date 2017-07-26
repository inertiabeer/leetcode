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
//依然是利用ｈａｓｈ,如果存在就删除