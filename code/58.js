var lengthOfLastWord = function(s) {
    if(s==="")
    {
        return 0;
    }
    var arr=s.split(" ");
    console.log(arr);

    for(var i=arr.length-1;i>=0;i--)
    {
        if(arr[i]===" ")
        {

        }
        else
        {
            return arr[i].length;
        }
    }
    return 0;

};
lengthOfLastWord("a ");