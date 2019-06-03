//输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），
//返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）


//思路：遍历并复制，这题很简单
/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead)
{
    // write code here
    if(!pHead){
        return false;
    }
    let head=new RandomListNode(),node,next,cur;
    head=pHead;
    next=head.next;
    cur=pHead.next;
    
    if(!cur){
        return head;
    }
    //当遍历到链表末尾，对于一般链表尾指针为空，对于循环链表尾指针指向头节点
    while(cur!=null&&cur!=pHead){
    //每次为新链表创建节点
        node=new RandomListNode();
        node=cur;
        next=node;
        //分别遍历原链和新构造链
        next=next;
        cur=cur.next
    }
    return head;
}
