/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var max =0;
    for(var i=0,j=height.length-1;i!=j;)
    {
        var temp;  
        if(height[j]>height[i])
        {
            temp=(j-i)*height[i];
            i++;
        }
        else {
            temp=(j-i)*height[j];
            j--;
        }
        if(temp>max)
        {
            max=temp;
        }

    }
    return max;
};

module.exports=maxArea;