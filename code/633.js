// /**
//  * @param {number} c
//  * @return {boolean}
//  */
// var judgeSquareSum = function(c) {
//     var max=Math.sqrt(c);
//     if(max%1===0)
//     {
//         return true;
//     }
//     max=parseInt(max);
//     for(;max>=Math.sqrt(c/2);)
//     {
//         for (var i = 1; (Math.pow(max, 2) + Math.pow(i, 2)) < c; i++)
//         {
//         }
//         if (Math.pow(max, 2) + Math.pow(i, 2) === c) {
//
//             return true;
//         }
//         else {
//             max--;
//         }
//     }
//     return false;
// };
// console.log(judgeSquareSum(100));
var judgeSquareSum = function(c) {
    for(var i=0;i<=Math.sqrt(c);i++)
    {
        if(Math.sqrt(c-i*i)===Math.floor(Math.sqrt(c-i*i)))
        {
            return true;
        }
    }
    return false;
}