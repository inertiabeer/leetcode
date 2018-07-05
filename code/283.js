/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let length=nums.length;
    for(var i=0;i<length-1;i++)
    {
        for(var j=i+1;j<length;j++)
        {
            if(nums[i]==0)
            {
                let temp=nums[i];
                nums[i]=nums[j];
                nums[j]=temp;
            }
        }
    }
    console.log(nums);
};
moveZeroes([0, 1, 0, 3, 12]);