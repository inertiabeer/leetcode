/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    var p=/[A-Z]/;
    var pre1=p.test(word[0]);//第一位
    var count=0;
    for(var i=1;i<word.length;i++)
    {
        if(p.test(word[i]))
        {
            count++;
        }
    }
    if(pre1)
    {
        if((1+count)==word.length||count==0)
        {
            return true;
        }
    }
    else {
        if(count==0)
        {
            return true;
        }
    }
    return false;
    
};
module.exports=detectCapitalUse;