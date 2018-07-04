/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    //t>s
    var hash={};
    for(let i=0;i<t.length;i++)
    {
        if(hash[t[i]])
        {
            hash[t[i]]++;
        }
        else {
            hash[t[i]]=1;
        }

    }
    for(let i=0;i<s.length;i++)
    {
        if(hash[s[i]])
        {
            hash[s[i]]--;
        }
        else {
            return s[i];
        }
    }
    for(let i in hash)
    {
        if(hash[i]==1)
        {
            return hash[i];
        }
    }
};