// *
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }


var isSameTree = function(p, q) {
// let num1=0,num2=0;
  if(p&&q)
  {
  	if(p.val===q.val)
  	{
  	return	isSameTree(p.left,q.left)&&isSameTree(p.right,q.right);
  	}
  	else
  	{
  	  return false;
  	}
  }
  if(!p&&!q)
  {	
  	return true;

  }
  else
  {
  	return false
  }
 
};