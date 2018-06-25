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
var countNodes = function (root) {
    var temp_left = root;
    var temp_right = root;
    let left = left_height(temp_left);
    let right = right_height(temp_right);
    if (left == right) {
        return Math.pow(2, left) - 1;
    }
    else {
        return countNodes(root.left) + countNodes(root.right)+1;

    }

};
function left_height(root) {
    if (root == null) {
        return 0;
    }
    return left_height(root.left) + 1;
}
function right_height(root) {
    if (root == null) {
        return 0;
    }
    return right_height(root.right) + 1;
}
module.exports=countNodes;