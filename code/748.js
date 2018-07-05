/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    let arr = licensePlate.split("");
    let chars = [];
    let min = 0;
    let min_length;
    let p = /[A-Za-z]/;
    arr.forEach(function (item, index) {
        if (p.test(item)) {
            chars.push(item.toLowerCase());

        }
    });
    for (var i = 0; i < words.length; i++) {
        let temp = words[i].split("");
        for (var j = 0; j < chars.length; j++) {
            let index = temp.indexOf(chars[j]);
            if (index >= 0) {
                temp.splice(index, 1);
            } else {
                break;
            }
        }
        if(j<chars.length)
        {
            continue;
        }
        if(min_length==null){
            min_length=temp.length;
            min=i;
        }
        else if(temp.length<min_length)
        {
            min_length=temp.length;
            min=i;
        }
    }
    return words[min];

};
module.exports = shortestCompletingWord;