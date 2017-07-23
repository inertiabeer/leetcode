/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    //[-1000,1000]
    var max1=-1000,max2=-1000,max3=-1000;
    var min1=1000,min2=1000;
    nums.forEach(function(n,index){
        if(n>max1)
        {
            max3=max2;
            max2=max1;
            max1=n;
        }
        else if(n>max2)
        {
            max3=max2;
            max2=n;
        }
        else if(n>max3)
        {
            max3=n;
        }
        if (n < min1) {
            min2 = min1;
            min1 = n;//主要是考虑会有负数
        } else if (n < min2) {
            min2 = n;
        }
    })
    return Math.max(max1*max2*max3, max1*min1*min2);
};