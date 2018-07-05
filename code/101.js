/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root)
    {
    	return true;
    }
    return isMirror(root.left,root.right)
    function isMirror(p,q)
    {
    	if(!p&&!q)
    	{
    		return true;
    	}
    	if(!p||!q)
    	{
    		return false;
    	}
    	else
    	{
    		if(p.val===q.val)
    		{
    			return isMirror(p.left,q.right)&&isMirror(p.right,q.left);
    		}
    		else
    		{
    			return false;
    		}
    	}

    }
   
};
