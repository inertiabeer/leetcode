/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    //两个数组的交集，首先需要去重
    let result=[];
    function removeDup(arr){
        let hash={};
        let result=[];
        for(var i=0;i<arr.length;i++)
        {
            if(!hash[arr[i]])
            {
                hash[arr[i]]=1;
            }   
        }
        for(var key in hash)
        {
            result.push(Number(key));

        }
        return result;
    }
    let temp1=removeDup(nums1);
    let temp2=removeDup(nums2);
    for(var i=0;i<temp1.length;i++)
    {
        for(var j=0;j<temp2.length;j++)
        {
            if(temp1[i]==temp2[j])
            {
                result.push(temp1[i]);
            }
        }
    }
    return result;
};
module.exports = intersection;