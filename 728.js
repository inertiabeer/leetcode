/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let result=[];
    for(let i=left;i<=right;i++)
    {
        if(ifDivid(i))
        {
            result.push(i);
        }


    }
    return result;
};
function ifDivid(num){
   let nums=  String(num).split('');
   for(var i=0;i<nums.length;i++)
   {
       if(num%nums[i]!=0){
           return false;
       }
   }
   return true;

}
console.log(selfDividingNumbers(1,128));
