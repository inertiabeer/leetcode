/**
 * @param {number[]} A
 * @return {boolean}
 */
var splitArraySameAverage = function (A) {
    //将数组平均分为两个数组，平均值相等
    // 分离后的数组平均值和之前的相同
    //求出平均值
    var sum = 0;
    for (var i = 0; i < A.length; i++) {
        sum += A[i];

    }
    var average = sum / A.length;
    //假设B的长度为k 小于等于C
    //1<=k<=n/2
    //B_sum=average*K;
    //C_sum=average*(n-k);
    // (sum*k)能够整除n  B_sum=sum/n*k B_sum为整数
    var k_range = [];
    for (var k = 1; k <= A.length / 2; k++) {
        if ((sum * k) % A.length == 0) {
            k_range.push(k);

        }

    }
    if (k_range.length == 0) {
        return false;
    }
    for(var i=0;i<k_range.length;i++)
    {
        var k=k_range[i];
    }

};