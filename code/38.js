/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let result="1";
    for(let i=1;i<n;i++)
    {
        let temp_result="";
        let temp=result.split("");
        for(let j=0;j<temp.length;j++)
        {
            let point=1;
            while(j<temp.length&&temp[j]==temp[j+1])
            {
                point++;
                j++;
            }
            temp_result+=point.toString()+temp[j].toString();
        }
        result=temp_result;


    }
    return result;
};
console.log(countAndSay(5));