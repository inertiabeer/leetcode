/**
 * @param {number[]} A
 * @return {number}
 */

var numberOfArithmeticSlices = function (A) {
    if (A.length < 3) {
        return 0;
    }
    var dp=[];
    for(var j=0;j<A.length;j++)
    {
        dp.push(0);

    }
    var  sum=0;
    for(var i=2;i<A.length;i++)
    {
        if(A[i]-A[i-1]==A[i-1]-A[i-2])
        {
            dp[i]=1+dp[i-1];
            sum+=dp[i];

        }
    }
    return sum;

};
console.log(numberOfArithmeticSlices([1, 2, 3, 4]));