/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {

    var multiple=Math.floor(n/26);//这里的主要问题在于ｚ的余数是０
    var remainder=n%26;
    let result;
    if(remainder) {
        result = String.fromCharCode(64 + remainder);
    }
    else
    {
        result="Z";
        multiple--;//在这里进行判断
    }
    if(multiple>0)
    {
        return convertToTitle(multiple)+result;
    }
    else
    {
        return result;
    }

};