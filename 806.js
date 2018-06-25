/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
    //widths是字母数组
    //一行最多100个单位
    //返回一个行数，一个最后一列的单位
    var chars = S.split("");
    var lines = [];
    let line_length = 0;
    for (var i = 0; i < chars.length; i++) {
        let char_width = widths[chars[i].charCodeAt() - 97];
        if ((line_length + char_width) > 100) {
            lines.push(line_length);
            line_length = 0;

        }
        line_length += char_width;
    }
    lines.push(line_length);
    console.log(lines);
    return [lines.length,lines[lines.length-1]];
};

module.exports=numberOfLines;