//输入两个链表，找出它们的第一个公共结点。


//思路：很简单
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    
    let p1=pHead1,p2=pHead2
    
    while(p1){
                
        while(p2){
            if(p1.val===p2.val){
                return p1;
            }
            p2=p2.next;
        }
        p2=pHead2;
        p1=p1.next;
        
    }
    
    
}
