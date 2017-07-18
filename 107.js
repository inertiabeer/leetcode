/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
	if(!root)
	{
		return [];
	}
	if(!root.left&&!root.right)
	{
		return [[root.val]];
	}

	var max=maxDepth(root);//那就说明结果是一个max个元素的数组
     var result=[];
     for(let i=0;i<max;i++)
     {
     	result.push([]);
     }
     addValue(root,0);
     return result;

    function addValue(current,index)
     { 	
     	if(current)
     	{
     		result[max-1-index].push(current.val);
     		addValue(current.left,index+1);
     		addValue(current.right,index+1);
     	}

     }
    function maxDepth (root) {
	var nums=1;
    if(!root)
    {
    	return 0;
    }
    if(!root.left&&!root.right)
    {
    	return 1;
    }
    if(root.left&&!root.right)
    {
    	return nums+maxDepth(root.left);
    }
    if(root.right&&!root.left)
    {
    	return nums+maxDepth(root.right);
    }
    else
    {
    	return Math.max(maxDepth(root.right)+nums,maxDepth(root.left)+nums);
    }
    };//一次就过，开心
};

