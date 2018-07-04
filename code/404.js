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
var sumOfLeftLeaves = function (root) {
    let sum=0;
    left(root,false);
    return sum;
    function left(root,flag){
        if(!root)
        {
            return ;
        }
        if(!root.left&&!root.right&&flag)
        {
          sum = sum + root.val;
        }
 
        left(root.left,true);
        left(root.right,false);

    }
};