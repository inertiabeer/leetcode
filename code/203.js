/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function(head, val) {
//
//     if(head===null)
//     {
//         return null;
//     }
//     head.next=removeElements(head.next,val);
//     return head.val=val?head.next:head;//最大的问题其实就是这个头结点不好处理
// }
var removeElements = function(head, val) {
    var pointer = head;
    while (pointer !== null && pointer.val === val) {
        pointer = pointer.next;
    }
    head = pointer;
    var prev = pointer;

    while (pointer !== null && pointer.val !== null) {
        if (pointer.val === val){
            prev.next = pointer.next;//如果相等的话，ｐｏｉｎｔｅｒ已经更新了，但是ｐｒｅｖ还没有
        } else {
            prev = pointer;
        }
        pointer = pointer.next;
    }
    return head;
};