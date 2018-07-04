/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
    var count=0;
    for(let j=0;j<=N;j++)
    {
        if(ifRotate(j))
        {
            count++;
        }
    }
    return count;
    function ifRotate(n)
    {
     let hash = {
        1: 1,
        0: 0,
        8: 8,
        2: 5,
        5:2,
        9:6,
        6: 9
     };
        let string_n = n.toString().split("");
        let rotate_n = [];
        for (let i=0;i<string_n.length;i++)
        {
             if (hash[string_n[i]] == null)//!0为true
             {
                 return false;
             }
             else {
                 rotate_n[i]=hash[string_n[i]];
             }

        }
        if(rotate_n.join('')==string_n.join(''))
        {
            return false;
        }
        return true;
        
    }


};

module.exports=rotatedDigits;