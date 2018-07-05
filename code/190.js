/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    var temp=n.toString(2);
    var char_arr=temp.split("");
    char_arr.reverse();
    while(char_arr.length<32)
    {
        char_arr.push("0");
    }
    return parseInt(char_arr.join(""),2);

};
console.log(reverseBits(1));