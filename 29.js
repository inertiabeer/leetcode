/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let sign=(dividend>0)^(divisor>0)?-1:1;
    //先求出结果的符号，用异或
    var temp_dend=Math.abs(dividend);
    var temp_isor=Math.abs(divisor);
    var unsign_result=0;
    while(temp_dend>=temp_isor)
    {
        temp_dend=temp_dend-temp_isor;
        unsign_result++;

    }
    if(unsign_result*sign>Math.pow(2,31)-1||unsign_result<-Math.pow(2,31))
    {
        return Math.pow(2, 31) - 1 
    }
    return unsign_result*sign;
};

//循环减法无效，太慢了



var divide = function (dividend, divisor) {
    let sign = (dividend > 0) ^ (divisor > 0) ? -1 : 1;
    //先求出结果的符号，用异或
    if(dividend==-Math.pow(2,31)&&divisor==-1)
    {
        return Math.pow(2,31)-1;
    }
    var temp_dend = Math.abs(dividend);
    var temp_isor = Math.abs(divisor);
    var unsign_result = 0;
    while(temp_dend>=temp_isor)
    {
        var temp=temp_isor;
        var multiple=1;
        while(temp_dend>=(temp<<1))
        {
            if((temp<<1)<temp)
            {
                break;
            }
            temp=temp<<1;
           multiple= multiple<<1;
        }
        temp_dend-=temp;
        unsign_result+=multiple;
    }

    if (unsign_result * sign > Math.pow(2, 31) - 1 || unsign_result < -Math.pow(2, 31)) {
        return Math.pow(2, 31) - 1
    }
    return unsign_result * (sign);
};

module.exports=divide;