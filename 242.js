/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//颠倒字母构成的短语
var isAnagram = function (s, t) {
    function return_hash(arr){
        let hash={};
        for(let i=0;i<arr.length;i++)
        {
            let t=arr[i];
            if(hash[t])
            {
                hash[t]++;
            }
            else {
                hash[t]=1;
            }
        }
        return hash;

    }
    function isEqual(obj1,obj2)
    {
        for(var key in obj1)
        {
            if(obj1[key]!=obj2[key])
            {
                return false;
            }
        }
        for (var key in obj2) {
            if (obj2[key] != obj1[key]) {
                return false;
            }
        }
        return true;
    }
    return isEqual(return_hash(s.split("")), return_hash(t.split("")))
};