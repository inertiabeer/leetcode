/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var result=[];
    for(let i=0;i<numRows;i++)
    {
        result.push([]);
    }
    if(!s)
    {
        return "";
    }
    if(numRows===1)
    {
        return s;
    }
    var charArray=s.split("");

    for(let i=0;i<charArray.length;)
    {
        for(let j=0;j<numRows&&i<charArray.length;j++)
        {
            result[j].push(charArray[i]);
            i++;
        }
        for(let j=numRows-2;j>=1&&i<charArray.length;j--)
        {

            result[j].push(charArray[i]);
            i++;
        }

    }

    for(var j=1;j<result.length;j++)
    {
       result[0].push.apply(result[0],result[j]);
    }
    return result[0].join("");
};
console.log(convert("PAYPALISHIRING",3));