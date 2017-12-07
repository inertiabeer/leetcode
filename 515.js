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
 function TreeNode(val) {
  this.val = val;
 this.left = this.right = null;
  }
  var tree1=new TreeNode(1);
  tree1.left =new TreeNode(2);
  tree1.right=new TreeNode(3);
var result=[];
var largestValues = function (root) {
    findMaxOfEveryRow(root,0,result);
    return result;
};
function findMaxOfEveryRow(root,row,result){
    if(!root)
    {
        return ;
    }
    if(result[row]==undefined)
    {
        result[row]=root.val;
    }
    else if(result[row]<root.val)
    {
        result[row] = root.val;
    }
    findMaxOfEveryRow(root.left,row+1,result);
    findMaxOfEveryRow(root.right,row+1,result);
    

}
console.log(largestValues(tree1));