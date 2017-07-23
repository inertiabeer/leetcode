function threeSum(nums)
{
    nums.sort();
    var result=[]
    for(let a=0;a<nums.length-2;a++)
    {
        for(let b=a+1;b<nums.length-1;b++)
        {
            for(let c=b+1;c<nums.length;c++)
            {
                if(nums[a]+nums[b]+nums[c]===0)
                {
                    var tempArr=[nums[a],nums[b],nums[c]];
                    if(result.indexOf(tempArr)>-1)
                    {
                        console.log("you'")
                        result.push(tempArr);


                    }



                }
            }
        }
    }
    return result;
}
threeSum([-1,0,1,2,-1,-4]);