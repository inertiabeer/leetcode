/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var result=Number(str);
    if(isNaN(result )){
        return 0;
    }
    else
    {
        return result;
    }
};