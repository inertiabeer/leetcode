/**
 * @param {string} s
 * @return {boolean}
 */
//这就是一个很基础的stack，数据结构上都学过，先进后出
var isValid = function(s) {
    var charArray=s.split("");
    var stack=[];

    for(var i=0;i<charArray.length;i++) {
        switch (charArray[i]) {
            case "(":

            case "[":

            case "{":
                stack.push(charArray[i]);
                break;
            case "}":
                if(stack.length===0||stack[stack.length-1]!=="{")
                {
                    return false;
                }
                else
                {
                    stack.pop();
                }
                break;
            case "]":
                if(stack.length===0||stack[stack.length-1]!=="[")
                {
                    return false;
                }
                else
                {
                    stack.pop();
                }
                break;
            case ")":
                if(stack.length===0||stack[stack.length-1]!=="(")
                {
                    return false;
                }
                else
                {
                    stack.pop();
                }
                break;




        }
    }
    if(stack.length>0)
    {
        return false
    }
    return true;
};