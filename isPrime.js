let result=[];
let n=1;
while(result.length<400000)
{
    if(isPrime(++n)){
        result.push(n);
    }

}

function isPrime(n) {
    if (n == 1) {
        return false;
    }
    for (var j = 0; j < result.length; j++) {
        if (n % result[j] == 0) {
            return false;
        }
    }
    return true;
}
console.log(result[399999]);
module.exports=isPrime;