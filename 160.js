/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var pair={};

    while(headB!==null)
    {
        pair[headB.val]=1;
        headB=headB.next;


    }
    while(headA!==null)
    {
        if(headA.val in pair)
        {
            return headA;
        }
        headA=headA.next;
    }
    return null;
};
//这个是我的，有点类似ｈａｓｈ值的
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }

    let nodeA = headA, nodeB = headB;

    while (nodeA !== nodeB) {
        nodeA = nodeA ? nodeA.next : headB;
        nodeB = nodeB ? nodeB.next : headA;
    }

    return nodeA;//哪怕是都等于null
};
//这个模拟了两个指针，ｃｏｏｌ