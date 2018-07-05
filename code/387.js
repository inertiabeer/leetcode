/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    s=s.split("");
    var unique={};
    var index_hash={};
    for(var i=0;i<s.length;i++)
    {
        if(!unique[s[i]])
        {
            unique[s[i]]=1;
            index_hash[s[i]]=i;
        }
        else {
            unique[s[i]]++;
        }
    }
    var flag=false;//是否有出现一次的
    let min_index=s.length-1;
    for(var key in unique)
    {
        if(unique[key]==1)
        {
            flag=true;
            if(index_hash[key]<min_index)
            {
                min_index=index_hash[key];
            }
        }
    }
    return flag?min_index:-1;
};