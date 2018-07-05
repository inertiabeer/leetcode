/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    var result=[];
    recursion("",0);
    return result;
    function recursion(str,index){
        if(index>=S.length)
        {
            result.push(str);
            return ;
        }
       if(S[index]%1==0)
        {
            recursion(str+S[index],index+1);

        }
        else
       {
           recursion(str + S[index].toLowerCase(), index + 1);
           recursion(str + S[index].toUpperCase(), index + 1);

        } 

    }
};

module.exports=letterCasePermutation;