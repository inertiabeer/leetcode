/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function (nums) {
    var ans = [[]]
    function CopySelf(arr) {
        var n = arr. length
        for (var i = 0; i < n; i++) {
            console.log([...arr[i]]);
            arr.push([...arr[i]]);//把数组变成一个参数列表
        }
    }
    for (var i = 0; i < nums.length; i++) {
        CopySelf(ans)
        for (var j = ans.length / 2; j < ans.length; j++) {
            ans[j].push(nums[i])
        }
    }
    return ans
};
module.exports=subsets;