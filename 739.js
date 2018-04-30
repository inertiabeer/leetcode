/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
let result=new Array(temperatures.length).fill(0);
for(var i=0;i<temperatures.length-1;i++)
{ 
    for(var j=i+1;j<temperatures.length;j++)
    {
        if(temperatures[i]<temperatures[j])
        {
            result[i]=j-i;
            break;
        }


    }
}
return result;
};
module.exports=dailyTemperatures;