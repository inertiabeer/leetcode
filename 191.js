/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let count = 0;
    let temp = n.toString(2).split("");
    for (var j = 0; j < temp.length; j++) {
        if (temp[j] == "1") {
            count++;
        }
    }


    return count;
};