/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    while((nums1.length+nums2.length)>2)
    {

        if(nums1.length===0)
        {
            nums2.splice(0,1);
            nums2.splice(-1);
        }

       else if(nums2.length===0)
        {
            nums1.splice(0,1);
            nums1.splice(-1);
        }
        else
        {
            if(nums1[0]<nums2[0])
            {nums1.splice(0,1)}
            else{nums2.splice(0,1);}
            if(nums1.length===0)
            {
                nums2.splice(-1);
            }
            else if(nums2.length===0)
            {
                nums1.splice(-1);
            }

            else if(nums1[nums1.length-1]>nums2[nums2.length-1])
            {
                nums1.splice(-1);}
            else {
                nums2.splice(-1);
            }

            console.log(nums1,nums2)

        }
    }

    if(nums1.length+nums2.length===2)
    {
        if(nums1.length===2)
        {
            return (nums1[0]+nums1[1])/2;
        }
        if(nums2.length===2)
        {
            return (nums2[0]+nums2[1])/2;
        }
        return (nums1[0]+nums2[0])/2;
    }
    if(nums1.length===1)
    {
        return nums1[0];
    }
    return nums2[0];

};
console.log(findMedianSortedArrays([2,3],[1]));