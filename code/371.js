/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
//不允许用+，-
// 用位运算，异或获取当前位的数值，与操作获取高位的进位
// a^b之后 加上对应的高位进位即可
var add=a^b;
var carry=(a&b)<<1;//高位补位，所以乘2
while(carry!=0)
{
    a=add;
    b=carry;
    add=a^b;
    carry=(a&b)<<1;
}
return add;

};
module.exports=getSum;