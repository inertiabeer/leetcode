/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    var aArray=a.split("+");
    var bArray=b.split("+");
    var aFirst=aArray[0];
    var bFrist=bArray[0];
    var aSecond=aArray[1].split("i")[0];
    var bSecond=bArray[1].split("i")[0];
    var result="",resultFirst=0;
    resultFirst=(aFirst*bFrist+(aSecond*bSecond)*-1);

    result=resultFirst+"+"+(aFirst*bSecond+bFrist*aSecond)+"i";


    return result;

};
console.log(complexNumberMultiply("1+1i","1+1i"));