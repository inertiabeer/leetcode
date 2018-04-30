var test = require('../2');
 function ListNode(val) {
  this.val = val;
  this.next = null;
}
let p1 = new ListNode(8);
let p2 = new ListNode(4);
p1.next=new ListNode(9);
console.log(test(p1,p2));
let n1 = 111111111111111111111111111111111111111111111111111111111111111111111;
let n2 = 11111111111111111111111111111111111111111111111111111111111111111111;
console.log((n1+n2).toFixed(68));