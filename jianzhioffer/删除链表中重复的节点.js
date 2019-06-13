//在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 
//例如，链表1->2->3->3->4->4->5 处理后为 1->2->5

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead)
{
    // write code here
    let arr=[],p=pHead,b=pHead,m=[]
    
    if(!pHead){
        return null
    }
    
    while(p){
        if(arr.indexOf(p.val)>-1){
            b.next=p.next
            m.push(b.val)
        }else{
             arr.push(p.val);
             b=p;
        }
       
        p=p.next
    }
    p=pHead
    while(p){
        
        if(p.next&&(m.indexOf(p.next.val)>-1)){
            let n=p.next;
            p.next=n.next
        }else{
             p=p.next
        }

    }
    if(m.indexOf(pHead.val)>-1){
            pHead=pHead.next
        }
    return pHead
}
