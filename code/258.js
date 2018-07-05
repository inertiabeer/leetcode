/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
   if(num%9==0)
   {
       return num==0?0:9;
   }
   return num%9;
};