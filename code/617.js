/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if(t1&&t2)
    {
        t1.val=t1.val+t2.val;
        mergeTrees(t1.left,t2.left);
        mergeTrees(t1.right,t2.right)
    }
    else if(!t1)
    {
        t1=t2;
    }
};
