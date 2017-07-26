/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var result=[];
    var pattern=/^[qwertyuiop]*$|^[asdfghjkl]*$|^[zxcvbnm]*$/i;//^开始$末尾|表示或者
    words.forEach(function(item,index){
        if(pattern.test(item))
        {
            result.push(item);
        }
    })
    return result;

};