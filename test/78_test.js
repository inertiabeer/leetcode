var test = require('../78');
var result=test([1,2,3,4,5,6,7,8,9]);
console.log(result);
var temp_6=[];
var not12=[];
for(var i=0;i<result.length;i++)
{
    if(result[i].length==6)
    {
        temp_6.push(result[i]);
    }
}
for (var i = 0; i < temp_6.length; i++) {
    for(var j=0;j<temp_6[i].length;j++)
    {
        if (temp_6[i][j] == 1 || temp_6[i][j]==2)
        {
            break;
        }
        if(j==temp_6[i].length-1)
        {
            not12.push(temp_6[i]);
        }
    }
}
console.log(temp_6.length);
console.log(not12.length);