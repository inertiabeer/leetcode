/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    let result=true;
    if(bits.length==0){
        return false;
    }
    if(bits.length==1)
    {
        return true;
    }
    let temp1 = [].concat(bits);
    if(temp1[0]=='1')
    {
    temp1.splice(0, 2);
    result=result&&isOneBitCharacter(temp1);
    }

    let temp2=[].concat(bits);
    if(temp2[0]=='0')
    {
    temp2.splice(0, 1);
        result = result && isOneBitCharacter(temp2);
    }
return result;
};
console.log(isOneBitCharacter([1, 1, 1, 0]));