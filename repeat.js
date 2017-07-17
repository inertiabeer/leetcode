function repeat(arr)
{
    var a=[];
    var b={};
    for(var i=0;i<arr.length;i++)
    {
        if(!b[arr[i]])
        {
            b[arr[i]]=1;
        }
        else
        {
            b[arr[i]]++;
        }
    }

    for(var key in b )
    {
        console.log(key);
        if(b[key]>1)
        {
            a.push(key);
        }
    }
    console.log(a);
}
repeat(["a","b","a","d","b",1,2,3,4,1,2])