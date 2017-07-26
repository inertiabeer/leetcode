/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0)
    {
        return false;
    }

    if(x<10){
        return true;
    }
    if(x%10===0){
        return false;
    }
    var reverse=0;
    //两个数，通过　%运算不断获取末尾的数字
    while (x>reverse)
    {
        reverse=reverse*10+x%10;
        x=parseInt(x/10);
    }
    return (x===reverse||x ===parseInt(reverse / 10));

};