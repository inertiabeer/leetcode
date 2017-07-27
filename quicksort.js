var quickSort = function(arr) {
    if(arr.length <= 1) return arr;             // 递归停止条件
    // 选取基准值
    var pivotIndex = Math.ceil(arr.length / 2);
    console.log(pivotIndex);
    var pivot = arr.splice(pivotIndex-1, 1)[0];// 这就是中间的那个基准值
    console.log(arr);
    var left = [], right = [];

    // 如果大于基准值，移到数组right中；小于基准的值，移到数组left中
    for(var i=0; i< arr.length; i++) {
        arr[i] > pivot ? right.push(arr[i]) : left.push(arr[i]);
    }

    return quickSort(left).concat([pivot], quickSort(right));//但是这个其实是很不好用的

};
console.log(quickSort([1,2,4,5,10,6,7,4,5]));