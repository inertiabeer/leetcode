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
int max = 0;
var maxPathSum = function (root) {

if(root==null)
{
    return max;
}
else if(root.val>0)
{
    max=max+root.val;
}
 return max+maxPathSum(root.left)+maxPathSum(root.right);
};