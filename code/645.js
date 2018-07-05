/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    var hash={};
    var sum=0;
    var should=0;
    var n=nums.length;
        should=n/2*(1+n);


    for(let i=0;i<nums.length;i++)
    {

        if(nums[i] in hash)
        {
            hash[nums[i]]++;
        }
        else {
            hash[nums[i]] = 1;
        }
        sum=sum+nums[i];
    }
    var sub=should-sum;
    for( key in hash)
    {
        if(hash[key]==2){
            key=Number(key);
            return [key,key+sub];
        }

    }
};
console.log(findErrorNums([1,2,2,4]));