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
var minDepth = function(root) {
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
        return nums;
    }
    if(root.right&&!root.left)
    {
        return nums;
    }
    else
    {
        return Math.min(maxDepth(root.right)+nums,maxDepth(root.left)+nums);
    }
};