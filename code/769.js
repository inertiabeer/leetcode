/**
 * @param {number[]} arr
 * @return {number}
 */
// 按顺序 划分块，每块单独排序，然后跟正常排序结果一样，看最多分成几块
// 就是数组中为0到n-1的无序排列，划分单独排序的块。
// 原理，第一个出现的值大于索引的，要把块分到等于索引的地方
var maxChunksToSorted = function (arr) {
    var i=0;
    var count=0;
    while(i<arr.length)
    {
            let max=arr[i];
            while(i<=max)
            {
                max=Math.max(max,arr[i]);
                i++;
            }
            count++;

    }
    return count;
};
console.log(maxChunksToSorted([1, 0, 2, 3, 4]));
module.exports=maxChunksToSorted;