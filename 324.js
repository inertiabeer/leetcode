/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//1满足中间的数比两边的大即可
// 相等的数不能相邻。相邻的数都在奇数列或者偶数列
var wiggleSort = function (nums) {
    function swap(a, b) {
        var temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
    var start = 0;
    var end = nums.length - 1;
    for(var i=0;i<nums.length-1;i++)
    {
        if(nums[i]==nums[i+1])
        {
            if(i!=0)
            {
                swap(i,i-1);
            }
            else {
                //至少3个
                swap(i+1,i+2);
            }
        }

    }
    for (var i = 0; i < nums.length; i = i + 2) {
        if (nums[i] > nums[i + 1]) {
            swap(i, i + 1);

        } 
    }
    for (var i = 1; i < nums.length; i = i + 2) {
        if (nums[i] < nums[i + 1]) {
            swap(i, i + 1);
        } 
       
    }
};

var wiggleSort = function (nums) {
    let temp=Array.from(nums);
    let length=nums.length-1;
    //偶数 8/2 -1
    // 奇数 9/2 -1
    let medium=Math.ceil(nums.length/2)-1;
 
    temp.sort(function (a,b) {
        return a-b;
    });
    for(var i=0;i<temp.length;i++)
    {
        // 对最后一位做且运算
        nums[i]=i&1?temp[length--]:temp[medium--];

    }

}
module.exports = wiggleSort;