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
var minDiffInBST = function (root) {
    var nodes=[];
    function get_nodes(root) {
        if(root!=null)
        {
            get_nodes(root.left);
            nodes.push(root.val);
            get_nodes(root.right);
        }
    }
    get_nodes(root);
    let min=nodes[1]-nodes[0];
    for(var i=0;i<nodes.length-1;i++)
    {
        let temp=nodes[i+1]-nodes[i];
        if(temp<min)
        {
            min=temp;
        }
    }
    return min;
};
module.exports = minDiffInBST;