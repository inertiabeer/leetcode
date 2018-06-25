/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    if(timeSeries.length==0)
    {
        return 0;
    }
    let result=duration;
    for(var i=0;i<timeSeries.length-1;i++)
    {
        let temp=Math.min(timeSeries[i+1]-timeSeries[i],duration);

        result+=temp;
    }
    return result;
};
module.exports=findPoisonedDuration;