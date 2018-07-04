// *
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
 
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
var constructMaximumBinaryTree = function(nums) {
	if(nums.length==0)
	{
		return null;}
	if(nums.length==1)
	{
		return new TreeNode(nums[0]);
	}
    console.log(nums);
	var max=maxIndex(nums);
	var root=new TreeNode(nums[max]);
	root.left=constructMaximumBinaryTree(nums.slice(0,max));
	root.right=constructMaximumBinaryTree(nums.slice(max+1));

	return root;


    
    function maxIndex(arr)
    {
    	var maxNum=arr[0];
    	var index=0;
    	for(var i=1;i<arr.length;i++)
    	{
    		if(arr[i]>maxNum)
    		{
    			maxNum=arr[i];
    			index=i;
    		}

    	}
    	
    	return index;
    }
};


constructMaximumBinaryTree([1,2,3,4,5,6,7,8])