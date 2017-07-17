/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1!==null&&l2===null){
        return l1;
    }
    if(l2!==null&&l1===null)
    {
        return l2;
    }
    var head= new ListNode("head");
    var node =head;
    while(l1!==null&&l2!==null)
    {
        if(l1.val>l2.val)
        {
            node.next={
                val:l2.val,
                next:null
            };
            l2=l2.next;
        }
        else
        {
            node.next={
                val:l1.val,
                next:null
            }
            l1=l1.next;
        }
        node =node.next;

    }
    node.next=(l1!==null)?l1:l2;
    var result=[];
    while(head.next!==null)
    {
        head=head.next;
        result.push(head.val);

    }
    return result;



};
