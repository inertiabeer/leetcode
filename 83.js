/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    if(head===null)
    {
        return head;
    }

    var temp=head;
    for(;temp.next!==null;temp=temp.next)
    {
        if(temp===temp.next)
        {
            temp.next=temp.next.next;
        }

    }
    return head;
};