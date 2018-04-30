/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    let max = 0;
    for (var i = 0; i < points.length - 2; i++) {
        for (var j = i + 1; j < points.length - 1; j++) {
            for (var k = j + 1; k < points.length; k++) {
                let p1 = points[i],
                    p2 = points[j],
                    p3 = points[k];
                let temp = Math.abs(0.5 * (p1[0] * p2[1] + p2[0] * p3[1] + p3[0] * p1[1] - p1[0] * p3[1] - p2[0] * p1[1] - p3[0] * p2[1]));
                          
                if (temp > max) {

                    max = temp;
                }
            }
        }

    }
    return max;
};
module.exports=largestTriangleArea;