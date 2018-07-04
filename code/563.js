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
// 计算倾斜度
var findTilt = function (root) {
    let result=0;
    postOrder(root);
    return result;
    function postOrder(root){
        if(root==null)
        {return 0;}
        let left=postOrder(root.left);
        let right =postOrder(root.right);
        result+=Math.abs(left-right);
        return root.val+left+right;
    }
};