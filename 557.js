/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var strArray=s.split(" ");//这里一开始忘了加空格了，浪费了不少时间
    for(let i=0;i<strArray.length;i++)
    {
        let charArray=strArray[i].split("");
            charArray.reverse();

        strArray[i]=charArray.join("");

    }
    return strArray.join(" ")
};
reverseWords("Let's take LeetCode contest");