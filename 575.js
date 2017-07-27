/**
 * @param {number[]} candies　equally in number　maximum number of kinds
 * @return {number}
 */
Array.prototype.quicksort=function()
{
    function sub_sort(arr,i,j)
    {
        var left=i;
        var right=j;
        if(j-i<=1)
        {
            return ;
        }
        let key=arr[i];
        while(i!==j)
        {
            for(;j>i;j--)
            {
                if(arr[j]<key)
                {
                    var temp=arr[j];
                    arr[j]=arr[i];
                    arr[i]=temp;
                    break;
                }
            }
            for(;i<j;i++)
            {
                if(arr[i]>key)
                {
                    var temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                    break;
                }
            }


        }
        sub_sort(arr,left,i-1);
        sub_sort(arr,i+1,right);
    }
    sub_sort(this,0,this.length-1);
}
var distributeCandies = function(candies) {
    var single={};
    var count=0;
    for(var i=0;i<candies.length;i++)
    {
        if(!(candies[i] in single))
        {
            single[candies[i]]=1;
            count++;
        }
        else
        {

        }
        if(count==candies.length/2)
        {
            return count;
        }
    }
    return count;
};
console.log(distributeCandies([1,1,2,2,3,3]));