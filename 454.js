/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
    var hash={};
    var result=0;
    for(var i=0;i<A.length;i++)
    {
        for(var j=0;j<B.length;j++)
        {
            var sum=A[i]+B[j];
            if(hash[-sum])
            {
             hash[-sum]++;   
            }
            else {
            hash[-sum]=1;
            }
        }
    }
    for(var i=0;i<C.length;i++)
    {
        for(var j=0;j<D.length;j++)
        {
            var sum=C[i]+D[j];
            if(hash[sum])
            {
                result=result+hash[sum];

            }
        }
    }
    return result;
};
module.exports=fourSumCount;