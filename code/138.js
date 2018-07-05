/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
 function RandomListNode(label) {
      this.label = label;
     this.next = this.random = null;
     
 }


var copyRandomList = function (head) {
    var remain=head;
    let ran_head=head;
    while(head!=null)
    {
        temp=head.next;
        head.next = new RandomListNode(head.label);
        head.next.next=temp;
        head=head.next.next;
        
    }
    var result=new RandomListNode(0);
    var result_head=result;
    while(ran_head!=null)
    {
        ran_head.next.random = (ran_head.random == null) ? null : ran_head.random.next;
        ran_head=ran_head.next.next;
    }
    while(remain!=null)
    {
        result.next=remain.next;

        remain.next=remain.next.next;
        remain=remain.next;
        result=result.next;
    }
    return result_head.next;
};
module.exports=copyRandomList;