/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number} index是right,
 */
var findBottomLeftValue = function(root) {
   var minRightIndex;
   var result;
   var maxDeepth=1;
   findRow(root,0,1);
  function findRow(root,index,deepth)
  {
      if(!root)
      {
          return ;
      }
      if(root.left===null&&root.right===null)
      {
          if(deepth>maxDeepth)
          {
              maxDeepth=deepth;
              minRightIndex=index;
              result=root.val;
          }
          else if(deepth===maxDeepth){
              minRightIndex = (minRightIndex !== undefined) ? Math.min(minRightIndex, index) : index;
              if (index === minRightIndex) {
                  result = root.val;
              }
          }

      }
      else
      {
          findRow(root.left,index,deepth+1);
          findRow(root.right,index+1,deepth+1);

      }

  }
  return result;
};