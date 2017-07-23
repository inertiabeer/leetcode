var maxSubArray = function(nums) {

    var n=nums.length;
    var dp=[];
    dp[0]=nums[0];
    var max=dp[0];
    for(var i=1;i<n;i++)
    {
        dp[i]=num[i]+(dp[i-1]>0?dp[i-1]:0);
        max=Math.max(max,dp[i]);
    }
    return max;
};