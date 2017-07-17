/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

	if(!strs[0])
	{
		return "";
	}
	if(strs[1]==="")
	{
		return "";
	}
    if(strs[1]===undefined)
        {
            return strs[0];
        }
    return getChar(0);
    function getChar(index)
    {
    if(index+1>strs[0].length)
    {
    	return common;
    }


     common=strs[0].substr(0,index+1);//这是index从0开始
     for(var i=0;i<strs.length;i++)
      {
      	if(strs[i]==="")
	     {
		  return "";
	     }
    	if(common.charAt(index)===strs[i].charAt(index))
    	{

    	}
    	else
    	{
    		return common.slice(0,-1);
    	}
      
      }

      return getChar(index+1);
    }


};
