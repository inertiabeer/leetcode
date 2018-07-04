/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var n=s.length;
    var hashObj={};
    var i=0,result=0,j=0;
    while(i<n&&j<n)
    {
        if(!(s[j] in hashObj))
        {

            hashObj[s[j]]=1;
            console.log(s[j]);
            j++;

            result=Math.max(result,j-i);

        }
        else
        {
         delete  hashObj[s[i]];

            i++;

        }

    }
    return result;

};
console.log(lengthOfLongestSubstring("qwsfs"));