/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
//极其简单粗暴的一种解法，就是变成数组，然后ｒｅｖｅｒｓｅ
    //但是在javascript中，这是合适的，因为js对2^51的数字进行操作时就已经有误差了

    if(x>=0)
    {

        let result=Number(x.toString().split("").reverse().join(""));
        if(result>Math.pow(2,31))
        {
            return 0;
        }
        else
        {
            return result;
        }

    }
    else
    {
        let result=Number("-"+x.toString().split("-")[1].split("").reverse().join(""));//
        if(result<=(-Math.pow(2,31)))
        {
            return 0;
        }
        else{
            return result;
        }

    }
};

