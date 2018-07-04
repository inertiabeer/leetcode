/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if(!strs[0])
    {
        return "";
    }
    if(strs[1]==="")
    {
        return "";
    }
    if(strs[1]===undefined)
    {
        return strs[0];
    }
    return getChar(0);
    function getChar(index)
    {
        if(index+1>strs[0].length)
        {
            return common;
        }


        common=strs[0].substr(0,index+1);//这是index从0开始
        for(var i=0;i<strs.length;i++)
        {
            if(strs[i]==="")
            {
                return "";
            }
            if(common.charAt(index)===strs[i].charAt(index))
            {

            }
            else
            {
                return common.slice(0,-1);
            }

        }

        return getChar(index+1);
    }


};
//这个是我之前写的很丑，但是其实第一位如果都存在的话，就只要判断第二位，如果第二位不存在就返回第一位就行了
var longestCommonPrefix = function(strs) {
    var s='';
    var i;
    if(!strs.length) return s;
    for(i=0;i<strs[0].length;i++){
        var k=strs[0][i];
        var j;
        for(j=1;j<strs.length;j++){
            if(k!=strs[j][i]) return s;//js里面的利用index获取字符串字母
        }
        if(j==strs.length) s+=k;
    }
    return s;
};
