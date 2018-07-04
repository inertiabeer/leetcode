/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
    var result=[];
    var chars=S.split("");
    var temp_count=1;
    var temp_value=chars[0];
    for(var i=1;i<chars.length;i++)
    {
        if(chars[i]==temp_value)
        {
            temp_count++;
        }
        else {
        
            if(temp_count>=3)
            {
                result.push([i-temp_count,i-1]);
            }
            temp_value = chars[i];
            temp_count=1;
        }

    }
    if(temp_count>=3)
    result.push([chars.length - temp_count, chars.length- 1]);
    return result;
};
module.exports=largeGroupPositions;