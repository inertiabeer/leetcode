/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    var s_arr=s.split("");
    var t_arr=t.split("");
    let hash={};
    let t_seen={};
    for(let i=0;i<s_arr.length;i++)
    {
        let item=s_arr[i];
        if(!hash[item]&&!t_seen[t_arr[i]])
        {
            hash[item]=t_arr[i];
            t_seen[t_arr[i]]=true;
        }
        else if (!hash[item] && t_seen[t_arr[i]])
        {
            return false;
        }
        else if(hash[item]!=t_arr[i])
        {
            return false;
        }
    }
    return true;
};
// aa ab