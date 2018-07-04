/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    var hash={};
    var result="";
    for(var i=0;i<s.length;i++)
    {
        if(!hash[s[i]])
        {
            hash[s[i]]=1;
        }
        else {
            hash[s[i]]=hash[s[i]]+1;
        }
    }
    var array=[];
    for(var key in hash)
    {
        array.push({
            key:key,
            num:hash[key]
        })
    };
    for(var j=0;j<array.length-1;j++)
    {
        for(var k=j+1;k<array.length;k++)
        {
            if(array[j].num<array[k].num)
            {
                [array[j], array[k]] = [array[k], array[j]];
            }
        }
    }
    for(var l=0;l<array.length;l++)
    {
        for(var z=0;z<array[l].num;z++)
        {
            result=result+array[l].key;
        }
    }
    return result;
};
module.exports=frequencySort;