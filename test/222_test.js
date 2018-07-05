var test=require("../222");

function T(val) {
      this.val = val;
     this.left = this.right = null;
     
 }
 var a=new T(1);
 a.left=new T(2);
 a.right=new T(3);
 a.left.left=new T(4);
 a.left.right=new T(5);
 a.right.left=new T(6);
 

 console.log(test(a));
