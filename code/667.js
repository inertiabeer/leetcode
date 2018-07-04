/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
    let temp_arr=[];

    for(let z=1;z<=n;z++)
    {
        if(z<n-k)
        {
        temp_arr[z - 1] = z;
        }
        else {
            var index=z-n+k;//从0开始
            temp_arr[z-1]=(index%2==0)?(n-k+index/2):(n-Math.floor(index/2))
        }


    }

    return temp_arr;

};
module.exports=constructArray;