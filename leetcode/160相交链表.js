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
    let p1=headA,p2=headB
    while(p1!=null){
        while(p2!=null){
            if(p1===p2){
                return p1
            }
            p2=p2.next
        }
        p1=p1.next
        p2=headB
    }
    return null
};