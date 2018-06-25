/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    var chars = str.split("");
    var start = true;
    var sign;
    var num = "";
    for (var i = 0; i < chars.length; i++) {
        if (start) {
            if (chars[i] == " ") {
                continue;
            } else if (chars[i] == "-" || chars[i] == "+") {
                sign = chars[i];
                start = false;
            } else if (chars[i]%1==0) {
                num = num + chars[i];
                start = false;
            } else {
                return 0;
            }
        } else {
            if(chars[i]==" ")
            {
                break;
            }
            if (chars[i]%1==0) {
                // " "%1===0 wtf?
                num = num + chars[i];
            } else {
                if (sign == "-") {
                    num = -Number(num);
                } else {
                    num = Number(num);
                }
                if (num < -Math.pow(2, 31)) {
                    num = -Math.pow(2, 31);
                }
                if (num > Math.pow(2, 31) - 1) {
                    num = Math.pow(2, 31) - 1;
                }
                return num;

            }
        }


    }
    if (sign == "-") {
        num = -Number(num);
    } else {
        num = Number(num);
    }
    if (num < -Math.pow(2, 31)) {
        num = -Math.pow(2, 31);
    }
    if (num > Math.pow(2, 31) - 1) {
        num = Math.pow(2, 31) - 1;
    }
    return num;
};
module.exports = myAtoi;