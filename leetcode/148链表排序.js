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
var sortList = function(head) {

    if(!head) return null

    let p=head,arr=[]
    while(p!=null){
       arr.push(p.val)
       p=p.next
    }
    arr.sort((a,b)=>{
        if(a-b<0) return -1
        else return 1
    })
    p=head
    let i=0
    while(p!=null){
        p.val=arr[i++]
        p=p.next
    }
    return head
};

 