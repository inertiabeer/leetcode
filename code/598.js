/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    let result=[];
    for(let i=0;i<m;i++)
    {
        let temp=new Array(n).fill(0);
        result[i]=temp;

    }
    for(let i=0;i<ops.length;i++)
    {

    }
};


var maxCount = function (m, n, ops){
    let minx=m;
    let miny=n;
    for(let i=0;i<ops.length;i++)
    {
        let [x,y]=ops[i];
        if(x<minx)
        {
            minx=x;
        }
        if (y < miny) {
            miny = y;
        }


    }
    return minx*miny;
}