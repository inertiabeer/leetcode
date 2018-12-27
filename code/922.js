/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    var odds=[];//奇数
    var evens=[];
    var result=[];
    A.forEach(item=>{
        if(item%2==0)
        {
            evens.push(item);
        }
        else {
            odds.push(item);
        }
    });
    for(var i=0;i<odds.length;i++)
    {
        result.push(evens[i]);
        result.push(odds[i]);

    }
    return result;

};