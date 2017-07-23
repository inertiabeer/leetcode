/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    console.log(head);
    if(!head||!head.next)
    {
        return false;
    }
    else
    {
        while(head.next!==null) {

            if(head.next===head)
            {
                return true;
            }
            if(head.next.next)
            {
                head.next= head.next.next;
                head=head.next;
            }
            else
            {
                return false;
            }



        }
        return false;
    }
};