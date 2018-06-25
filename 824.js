/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
    var word = S.split(" ");
    var reason = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < word.length; i++) {
        let temp = word[i].split("");
        if (reason.indexOf(temp[0].toLowerCase()) > -1) {
            temp.push("ma");

        } else {
            let frist_char = temp.shift();
            temp.push(frist_char);
            temp.push("ma");

        }
        for (var j = 0; j < i+1; j++) {
            temp.push("a");
        };
        word[i]=temp.join('');
    }
    return word.join(" ");
};
module.exports=toGoatLatin;