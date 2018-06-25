/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    var low=0,high=n,mid;
    // 二分查找
    // 如果求和公式小于n，说明在中间的右边
    // 否则是在左边。
    // 跳出循环时，low>high,
    while(low<=high)
    {
        mid=Math.floor((low+high)/2);
        if(sum(mid)<=n)
        {
            low=mid+1;
        }
        else 
        {
            high=mid-1;
        }

    }
    return low-1;

    function sum(i)
    {
        return (1+i)*i/2;
    }
};