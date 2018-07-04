var rotate = function(nums, k) {
    for(let i=0;i<k;i++)
    {

        nums.unshift(nums.splice(-1)[0]);
    }
};
var nums=[1];
rotate(nums,1);
console.log(nums);