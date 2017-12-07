/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
    if (nums.length == 1) {
        return String(nums[0]);
    }
    if (nums.length == 2) {
        return String(nums[0] + "/" + nums[1]);
    }
    var result = nums[0] + "/";
    var temp = "";
    for (var i = 1; i < nums.length; i++) {

        temp = temp + String(nums[i]) + "/";

    }
    console.log(temp);
    temp = temp.substr(0, temp.length - 1);

    result = result + "(" + temp + ")";
    return result;
};
console.log(optimalDivision([1000, 100, 10, 2]));