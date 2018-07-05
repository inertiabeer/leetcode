/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var sortedArrayToBST = function (nums) {
    if (nums.length == 0) {
        return null;
    }
    var head = num_node( 0, nums.length - 1);
    return head;
    function num_node( left, right) {
        if(left>right)
        {
            return null;
        }
        let mid=Math.floor((left+right)/2);
        let node =new TreeNode(nums[mid]);
        node.left=num_node(left,mid-1);
        node.right=num_node(mid+1,right);
        return node;
    }


};
console.log(sortedArrayToBST([1,2,3,4,5]));