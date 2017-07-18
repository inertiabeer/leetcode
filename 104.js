/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	var nums=1;
    if(!root)
    {
    	return 0;
    }
    if(!root.left&&!root.right)
    {
    	return 1;
    }
    if(root.left&&!root.right)
    {
    	return nums+maxDepth(root.left);
    }
    if(root.right&&!root.left)
    {
    	return nums+maxDepth(root.right);
    }
    else
    {
    	return Math.max(maxDepth(root.right)+nums,maxDepth(root.left)+nums);
    }
};//一次就过，开心