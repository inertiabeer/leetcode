/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function(digits) {
    let flag=true;
    for(let i=digits.length-1;i>=0;i--)
    {
        if(flag)
        {
          if(digits[i]+1>=10)
          {
              digits[i]=(digits[i]+1)%10;
          }
          else
          {
              digits[i]=(digits[i]+1);
              flag=false;
          }
        }

    }
    if(flag)
    {
        digits.unshift(1);
    }
    return digits;
};