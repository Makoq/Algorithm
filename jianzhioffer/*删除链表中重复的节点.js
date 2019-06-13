//在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 
//例如，链表1->2->3->3->4->4->5 处理后为 1->2->5

//题目很不错，有一些陷阱
//思路：本来如果是删除多余的重复项，即至少保留一项，则一趟遍历删除节点就ok了，但是他这里要求只要是重复项就全删除不保留
//      两个辅助栈的使用：所以用了两个栈，分别用来检测当前遍历项是否已出现过，记录重复出现项
//      时间复杂度的优化：因为两层循环的嵌套会增加时间复杂度，所以利用第二个栈，将两层循环变成了两次循环，将深度转为宽度，但其实也是一种空间换时间的做法
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
    p=pHead//注意回到起点
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
