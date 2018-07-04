/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    function quickSort(arr)
    {
        if(arr.length<=1)
        {
            return arr;
        }
        var pivotIndex=Math.floor(arr.length/2);
        var pivot = arr.splice(pivotIndex, 1)[0];
        let left=[];
        let right=[];
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i]<pivot)
            {
                left.push(arr[i]);
            }
            else {
                right.push(arr[i]);
            }
            
        }
        return quickSort(left).concat([pivot], quickSort(right));
    }
    nums=quickSort(nums);
    var medium;
    let step=0;
    if(nums.length%2!=0){
        var medium = Math.floor(nums.length / 2);
        for (var i = 0; i < nums.length; i++) {
            step = step + Math.abs(nums[medium]-nums[i]);
        }
    }
    else {
    var medium1 = (nums.length / 2);
    var medium2=medium1-1;
    let step1=0,step2=0;
    console.log(nums.length,medium1,medium2);
    for (var i = 0; i < nums.length; i++) {
        step1 = step1 + Math.abs( nums[medium1]-nums[i]);
        step2 = step2 + Math.abs( nums[medium2]-nums[i]);
    }
    step=step1>step2?step2:step1;
    }

    return step;
};
module.exports=minMoves2;