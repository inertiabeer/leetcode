/**
 * @param {number[]} nums
 * @return {number}
 */
Array.prototype.mysort=function(fn)
{
  for(let i=0;i<this.length-1;i++)
  {
      for(let j=i+1;j<this.length;j++)
      {
          if(fn(this[i],this[j])>0)
          {
              temp=this[i];
              this[i]=this[j];
              this[j]=temp;
          }
      }
  }
};
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
var arr=[6,3,2,9,7,5,6];
arr.quicksort();
console.log(arr);
function fn(a,b)
{
    return a-b;
}
var arrayPairSum = function(nums) {
    function fn(a,b)
    {
        return a-b;
    }
    nums.mysort(fn);
    var result=0;
    for(var i=0;i<nums.length;i=i+2)
    {
        result=result+nums[i];

    }
    return result;

};
