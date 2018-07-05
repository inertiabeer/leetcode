/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    var binary=n.toString(2);
   var bins= binary.split('');
   console.log(binary);
   var temp=bins[0];
   for(var i=1;i<binary.length;i++)
   {
       if(temp!==bins[i])
       {
           temp=bins[i];
           continue;
       }
       else
       {
           return false;

       }

   }
   return true;
};
console.log(hasAlternatingBits(10));