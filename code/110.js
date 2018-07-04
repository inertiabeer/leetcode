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
var isBalanced = function (root) {
    if(root==null)
    {
        return true;
    }
    return deepth(root,0)!=-1;
   function deepth(root,height)
   {
       if(root==null)
       {
           return height;
       }
       let left=deepth(root.left,height+1);
       let right=deepth(root.right,height+1);
       if(left==-1||right==-1)
       {
           return -1;
       }
       if(Math.abs(left-right)>1)
       {
           return -1;
       }
       return Math.max(left,right);
   }
};