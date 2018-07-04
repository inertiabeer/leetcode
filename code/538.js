//给定二进制搜索树（BST），
//将其转换为更大树，
//以便将原始BST的每个密钥更改为原始密钥加上大于BST中原始密钥的所有密钥的总和。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
    let arr = [];
    let temp=root;
    let i = 0;
    BST2arr(temp);
    greater(temp);
    function BST2arr(root) {
        if (root != null) {
            BST2arr(root.right);
            arr.push(root.val);
            BST2arr(root.left);
        }
    }
   
    function greater(root) {
        if (root != null) {
            greater(root.right);
            for(let j=0;j<i;j++)
            {
                root.val=root.val+arr[j];
            }
            i++;
            greater(root.left);
        }
    }
    return root;
};