//输入一个链表，反转链表后，输出新链表的表头

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    let arr=[]
    if(pHead===null){
        return false
    }
    while(pHead!=null){
        arr.push(pHead);
        pHead=pHead.next;
    }
    
    let head=arr.pop(),cur=head;
    while(arr.length>0){
        cur.next=arr.pop();
        cur=cur.next;
    }
    cur.next=null;
    
    return head;
}
