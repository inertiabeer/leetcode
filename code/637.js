/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    var result=[];
    var countArr=[];
    function getSum(node,index)
    {
        if(node)
        {
            countArr[index]=countArr[index]?countArr[index]+1:1;
            result[index]=result[index]?result[index]+node.val:node.val;
            getSum(node.left,index+1);
            getSum(node.right,index+1);
        }
    }
    getSum(root,0);

    for(var i=0;i<result.length;i++)
    {
        result[i]=result[i]/countArr[i];
    }
    return result;

};
