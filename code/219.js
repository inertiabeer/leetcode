/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let hash = {};
    var flag=false;
    for (var i = 0; i < nums.length; i++) {
        let item = nums[i];
        // 0转换了
        if (hash[item]!=undefined) {
            if(i-hash[item]<=k)
            {
                
                flag=true;
            }
            hash[item] = i;
        } else {
            hash[item] = i;
        }
    }
    return flag;
};