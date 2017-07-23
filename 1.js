/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let pair = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (num in pair) return [pair[num], i];

        pair[target - num] = i;
    }
}