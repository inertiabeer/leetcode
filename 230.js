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
 * @return {number}
 */
// bst 中序遍历是ordered  要点在于全局变量k和对root为null的判断
// 以及如何将递归数据回传到最初的函数
var kthSmallest = function (root, k) {
    function order(root) {
        if(root==null)
        {
            return ;
        }
       var left= order(root.left);
       k--;
       if(k==0)
       {
           return root.val
       }
       var right=order(root.right);
       if(left!=undefined)
       {
           return left;
       }
       else if (right != undefined)
       {
           return right;
       }
    }
    return order(root);

};
