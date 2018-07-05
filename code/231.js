/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if(n==0)
    {
        return false;
    }
    if(n==1)
    {
        return true;
    }
    if(n%3==0)
    {
        return isPowerOfThree(n / 3);
    }
    else 
    {
        return false;
    }

};
console.log(isPowerOfTwo(4));
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    return n > 0 && 1162261467 % n == 0;

};

