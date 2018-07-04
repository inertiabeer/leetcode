/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function threeSum(nums)
{

    var pair={};
    var result=[];
    for(let i=0;i<nums.length-1;i++)
    {


        if(nums[i] in pair&&i>=2)
        {

                if(pair[nums[i]][1]<i)
                {console.log("存在的");
                    let arr=pair[nums[i]];
                    result.push([nums[arr[0]],nums[arr[1]],nums[i]]);
                }

        }
        else
        {
            for(let j=i+1;j<nums.length;j++)
            {
                pair[0-(nums[i]+nums[j])]=[i,j];
            }
        }

    }
    return result;
}
threeSum([0,0,0]);