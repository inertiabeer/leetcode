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
        // 利用ｈａｓｈ表，遍历发现如果已经存在相加为ｔａｒｇｅｔ的，就直接ｒｅｔｕｒｎ
    }
}