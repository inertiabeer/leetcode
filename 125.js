/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {


    var result=s.replace(/\W/g,"");
    var i=0;j=result.length-1;

    while(i<j)
    {
        if(result[i].toLowerCase()===result[j].toLowerCase())
        {

        }
        else
        {
            return false;
        }
        i++;
        j--;
    }
    return true;


};
console.log(isPalindrome("A man, a plan, a canal: Panama"));