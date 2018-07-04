/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if(s.length==0)
    {
        return 0;
    }
    var count=0;
   function isPalindrome(s,i,j)
   {
       while(i>=0&&j<s.length&&s.charAt(i)===s.charAt(j))
       {
           count++;
           i--;
           j++;

       }

   }
   for(var i=0;i<s.length-1;i++)
   {
       isPalindrome(s,i,i);
       isPalindrome(s,i,i+1);
   }
   return count;
};