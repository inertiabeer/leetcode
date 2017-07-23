// var convertToTitle = function(n) {
//
//     var multiple=Math.floor(n/26);//这里的主要问题在于ｚ的余数是０
//     var remainder=n%26;
//     let result;
//     if(remainder) {
//         result = String.fromCharCode(64 + remainder);
//     }
//     else {
//         result="Z";
//         multiple--;//在这里进行判断
//     }
//     if(multiple>0) {
//         return convertToTitle(multiple)+result;
//     }
//     else {
//         return result;
//     }
//
// };
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var charArray=s.split("");
    var result=0;
    var index=0;
    while(charArray.length>0)
    {
        var lastChar=charArray[charArray.length-1];

        var asciiCode= lastChar.charCodeAt(0)-64;


        result=asciiCode*Math.pow(26,index)+result;
        index++;
        charArray.splice(-1);


    }
    return result;
};
