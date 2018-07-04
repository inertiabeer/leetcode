/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let five=0;
    let ten=0;
    for(let i=0;i<bills.length;i++)
    {
        switch (bills[i]) {
            case 5:
                five++;
                break;
            case 10:
            if(five>0)
            {
                ten++;
                five--;
            }
            else {return false;}

                break;
            case 20:
                if(ten>0&&five>0)
                {
                    ten--;
                    five--;
                }
                else if(five>=3)
                {
                    five=five-3;
                }
                else {
                    return false;
                }
                break;
            default:
                break;
        }
    }
    return true;
};