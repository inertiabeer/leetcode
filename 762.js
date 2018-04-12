/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
    var result=0;
    for(var i=L;i<=R;i++)
    {
        let temp=i.toString(2).split("");
        let count=0;
        for(var j=0;j<temp.length;j++)
        {
            if(temp[j]=="1")
            {
                count++;
            }
        }
        if(isPrime(count)){
            result++;
        }
    }
    return result;
    function isPrime(n)
    {
        if(n==1)
        {
            return false;
        }
        for(var j=n-1;j>1;j--)
        {
            if(n%j==0)
            {
                return false;
            }
        }
        return true;
    }
};
console.log(countPrimeSetBits(244,269));