function print(x){
    console.log(x);
}
// var n=2 ,m=1,k=2;
// var exp=[
//     [1,2],
//     [3,1]
// ]
function readline(){
    return "2 1 2";
}
var first = readline().split(" ");
var n=Number(first[0]),m=Number(first[1]),k=Number(first[2]);
var exp=[];
for(var i=0;i<k;i++)
{
    var temp=readline().split(" ");
    exp.push([
        Number(temp[0]),Number(temp[1])
    ]);
}

cola();
// 返回一行数 表示第i种的可乐数目
// n 总可乐 m小美喝的 exp 不同的快乐值
function cola()
{
    var x=m/n;  // 概率
    var index=0;
    var maxe = m / n * exp[0][0] + (n - m) / n * exp[0][1];
    for(var i=1;i<exp.length;i++ )
    {
        var sum=m/n*exp[i][0]+(n-m)/n*exp[i][1];
        if(sum>=maxe)
        {
            index=i;
            maxe=sum;
        }
    }
    var result="";
    for(var i=0;i<k;i++)
    {
        if(i>0){
            result=result+" ";
        }
        if(i==index)
        {
            result=result+n.toString();
        }
        else 
        {
            result=result+"0";
        }
    }
    print(result);

}
