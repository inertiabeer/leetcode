/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var charArray = s.split("");
    for (var i = 0; i < charArray.length; i++) {
        switch(charArray[i]) {
            case "I":
                charArray[i] = 1;
                break;
            case "X":
                charArray[i] = 10;
                break;
            case "C":
                charArray[i] = 100;
                break;
            case "M":
                charArray[i] = 1000;
                break;
            case "V":
                charArray[i] = 5;
                break;
            case "L":
                charArray[i] = 50;
                break;
            case "D":
                charArray[i] = 500;
                break;
        }



    }
    //罗马数字中，如果左边的比右边的大，那么就是左加上右，不然就是右减去左
    var result = 0;
    for (let j = 0; j < charArray.length - 1; j++) {
        if (charArray[j] < charArray[j + 1]) {
            result = result - charArray[j];
        } else {
            result = result + charArray[j];

        }


    }
    //最后加上末尾，因为这个肯定是加的
    return (result+charArray[charArray.length-1]);
};