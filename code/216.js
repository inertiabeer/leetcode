/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    var result=[];
    concatNumber([],k,1,n);
    // 一个数组，用来添加数字的，k为数字数目，1为开始的数字，防止重复的，n为target
    // 对数组进行操作，最后符合要求的应该push进去一个新数组
    // 用回溯法，基本原则，添加多少，回溯多少
    return result;
    function concatNumber(arr, k, start, target) {
        if (k == 1) {
            if (target >= start&&target<=9) {
                arr.push(target);
                result.push(JSON.parse(JSON.stringify(arr)));
                arr.pop();
            
            }
            


        } else {
            for (var i = start; i <= 9; i++) {
                arr.push(i);
                concatNumber(arr, k - 1, i + 1, target - i);
                arr.length=arr.length-1;
            
            }
        }
    }

};

module.exports = combinationSum3;