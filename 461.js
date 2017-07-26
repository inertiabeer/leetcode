/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
//Hamming Distance　其实是两个二进制，有区别的位数，先异或处理，然后数１的个数
var hammingDistance = function(x, y) {
    var temp=x^y;
    var count=0;
    for(var i=0;i<32;i++)
    {
        if(temp>>i&1)
        {
           //按位与只会返回都为１的那个
            count++;
        }
    }
    return count;
};
hammingDistance(1,4);