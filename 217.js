/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hash={};
    for(var i=0;i<nums.length;i++)
    {
        let item=nums[i];
        if (hash[item]) {
            return true;
        } else {
            hash[item] = 1;
        }
    }
    return false;
};
containsDuplicate([1,2,3,1]);