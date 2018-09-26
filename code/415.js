/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    var nums1=num1.split('').reverse();
    var nums2=num2.split('').reverse();
    let result=[];
    let add10=false;
    for(var i=0;i<nums1.length||i<nums2.length;i++)
    {
        let temp = (nums1[i] == undefined ? 0 : parseInt(nums1[i])) + (nums2[i] == undefined ? 0 : parseInt(nums2[i])) + (add10 ? 1 : 0);
        if(temp>=10)
        {
            temp=temp-10;
            add10=true;
        }
        else {
            add10=false;
        }
        result.push(temp);
    }
    if(add10==true)
    {
        result.push(1);
    }
    return result.reverse().join("");
};
module.exports = addStrings;