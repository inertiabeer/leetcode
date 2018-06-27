/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    var result=[];
    var seen=new Array(nums2.length).fill(false);
    for(var i=0;i<nums1.length;i++)
    {
        for(var j=0;j<nums2.length;j++)
        {
            if(nums1[i]==nums2[j]&&!seen[j])
            {
                result.push(nums1[i]);
                seen[j]=true;
                break;
            }
        }
    }
    return result;
};
module.exports=intersect;