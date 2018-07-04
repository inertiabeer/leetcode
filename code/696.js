/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    var prev=0,cur=1,result=0;
    for(let i=1;i<s.length;i++)
    {
        if(s[i]==s[i-1]) cur++;//cur存储之前有多少个相同的数字
        else {
            prev=cur;//这时候记录之前的不同数字的个数
            cur=1;
        }
        if(prev>=cur)
        {
            result++;//只要之前的数字比当前的多的，都可以++
        }
        
    }
    return result;
};