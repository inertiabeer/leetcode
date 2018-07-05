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
// 倒插法
var reverseList = function (head) {
    let tail=null;
    let temp=null;
    let current=head;
    while (current != null)
    {
        temp = current;
        current = current.next;//当前节点后移
        temp.next=tail;//给临时节点添加后续
        tail=temp;

        
    }
    return temp;
};
//104861201805007057