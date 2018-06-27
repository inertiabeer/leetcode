/**
 * @param {number} area
 * @return {number[]}
 */
//宽比长小
//返回数组的第一个数要大，而且两个数的插值要小
var constructRectangle = function (area) {
    var height=Math.ceil(Math.sqrt(area));
    while(height<area)
    {
        if(area%height==0)
        {
            return [height, area / height]
        }
        else {
            height++;
        }
    }
    return [height,area/height]
};
module.exports=constructRectangle;