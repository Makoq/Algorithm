//给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。

//思路：其实很简单，其实很自然。。。。利用一个数组记录遍历过的节点，每遍历一个节点时查看该节点是否已经遍历过

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    // write code here
    
    let p=pHead,q,all=[]
    
    if(!pHead){
        return null
    }
    while(p){
        if(all.indexOf(p)>-1){
            return p;
        }
        
        all.push(p)
        
        p=p.next;
    }
   
    
    return null
}
