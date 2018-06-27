var test=require("../783");
function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
    
 }
 var test1=new TreeNode(4);
 test1.left=new TreeNode(2);
 test1.right=new TreeNode(6);
 console.log(test(test1));