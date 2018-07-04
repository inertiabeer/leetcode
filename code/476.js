/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var binary= num.toString(2);
    binary=binary.split("");
    for(let i=0;i<binary.length;i++)
    {

        if(binary[i]=='0')
        {
            binary[i]=1;
        }
        else
        {
            binary[i]=0;
        }

    }
    return parseInt(binary.join(""),2);
};
findComplement(5);
