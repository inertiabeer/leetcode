/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s==="")
    {
        return "";
    }
    if(s.length===1)
    {
        return s;
    }
    //去掉空和单个
    var min_start=0;//这是开头
    var max_len=1;//这是结尾
    for(let i=0;i<s.length;)
    {
        if(s.length-i<=max_len/2)
        {
            break;//因为是从ｉ开始扩散的，如果后面可以扩散的没有ｍａｘ的一半
        }
        var j=i,k=i;
        while(k<s.length-1&&s[k+1]===s[k])
        {
            k++;//去掉重复的
        }
        i=k+1;
        //检验每一个ｉ是否可以扩散
        while(k<s.length-1&&j>0&&s[k+1]===s[j-1])
        {

            k++;
            j--;
        }
        console.log(k+"k");
        console.log(j+"j");
        var new_len=k-j+1;
        if(new_len>max_len)
        {
            min_start=j;
            max_len=new_len;
        }
    }
    return s.substr(min_start,max_len)//求出最大长度的开始


};
console.log(longestPalindrome("babad"));