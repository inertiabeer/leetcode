/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    let hash={};
    return orderTree(root);
    function orderTree(root)
    {
        if(!root)
        {
            return false;
        }
        let left=orderTree(root.left);
        let result=false;
        if(hash[root.val])
        {
            result=true;
        }
        else {
            hash[k-root.val]=1;
        }
        let right=orderTree(root.right);
        return left||result||right;
    }
};