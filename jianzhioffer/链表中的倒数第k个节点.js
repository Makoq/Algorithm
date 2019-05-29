//输入一个链表，输出该链表中倒数第k个结点。
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head,k){
    var arr=[];
    var cur=head.next;
    while(cur!=null){
        arr.push(cur)
        cur=cur.next;
    }
    
    return arr[arr.length-1]
}
