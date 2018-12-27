/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    for(var i=A.length-1;i>0;i--)
    {
        for(var j=0;j<i;j++)
        {
            // if(A[j]>A[j+1])
            // {
            //     let temp=A[j];
            //     A[j]=A[j+1];
            //     A[j+1]=temp;

            // }
            if(A[j]%2==1&&A[j+1]%2==0)
            {
                       let temp = A[j];
                       A[j] = A[j + 1];
                       A[j + 1] = temp;
            }
            //其实就是这里的判断改一改

        }
    }
    return A;
};
sortArrayByParity([1,2,3,4,5,6,5,2])