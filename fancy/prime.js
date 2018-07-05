var countPrimes = function () {
    let flagArray = [2];
    for (let i = 3; flagArray.length<521029; i++) {
     for(var j=0;j<flagArray.length;j++)
     {
         if(i%flagArray[j]==0)
         {
             break;
         }
     }
     if(j==flagArray.length)
     {
         flagArray.push(i);
     } 
    }
    return flagArray[521028];
};
countPrimes();