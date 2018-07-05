/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var result=[0];
    for(let i=1;i<=num;i++)
    {
        result.push(0);
        var binary= i.toString(2).split("");
        for(let j=0;j<binary.length;j++)
        {
            if(binary[j]==1)
            {
                result[i]++;
            }

        }
    }
    return result;
};