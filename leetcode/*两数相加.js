//给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位数字。

//如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

//您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

//示例：

//输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
//输出：7 -> 0 -> 8
//原因：342 + 465 = 807

//思路：核心是利用链表知识，当然在计算两数之和时考虑进位是本题的重点，之前我试图将链表中的值拿给数组，转为数字再相加后颠倒，再创建链表，但在leetcode里执
//     不通过，还是回到链表的操作上可以成功，网上主流的写法也是链表操作，主题思路就是考虑进位的情况下，进一步考虑两个链表不等长的情况，这个要考虑周全
//     我感觉我的代码写的还是太繁复，没有别人的精简，而且我用一个栈作为标识，开销还是太大，应该可以用一个变量就可以的，之后有时间再优化吧
 
 // Definition for singly-linked list.
 function ListNode(val) {
    this.val = val;
    this.next = null;
}
/*
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
  if(!l1&&!l2){
      return null
  }
  
  let arr=[],v,p=new ListNode(),q=p
  
  while(l1&&l2){
     v=l1.val+l2.val
     if(arr.length>0){
        v+=1
        arr.pop()
     }
    
    q.next=new ListNode()
    if(v<10){
        q.next.val=v
    }
    if(v===10||v>10){
        q.next.val=v%10
        arr.push(1)
    }
      
    q=q.next
    l1=l1.next
    l2=l2.next
  }
    if(!l1&&!l2&&arr.length>0){
        q.next=new ListNode(1)
    }
  
    if(l1){
         if(arr.length>0){
             let n=l1.val+1
             arr.pop()
             if(n<10){
                l1.val=n
                q.next=l1
            }
             else{//todo 
                 q.next=new ListNode(0)
                 l1=l1.next
                 if(!l1){
                     arr.push(1)
                 }
                 q=q.next
                 while(l1!=null){
                       let m=l1.val+1
                       if(m<10){
                         q.next=l1;
                           break;
                       }else{
                           
                           q.next=new ListNode(0)
                           l1=l1.next;
                           if(!l1){
                              arr.push(1)
                              }
                           q=q.next;
                       }
                }  
                 if(arr.length>0){
                     q.next=new ListNode(1)
                 }
             }
             q.next=l1
         }else{
             q.next=l1
         }
          
     }
     if(l2){
         if(arr.length>0){
             let n=l2.val+1
             if(n<10){
                l2.val=n
                }
             else{//todo
                 q.next=new ListNode(0)
                 l2=l2.next
                 if(!l2){
                     arr.push(1)
                 }
                 q=q.next
                 while(l2!=null){
                       let m=l2.val+1
                       if(m<10){
                         q.next=l2;
                           break;
                       }else{
                           
                           q.next=new ListNode(0)
                           l2=l2.next;
                           if(!l2){
                               arr.push(1)
                           }
                           q=q.next;
                       }
                } 
                 if(arr.length>0){
                     q.next=new ListNode(1)
                 }
             }
             q.next=l2
         }else{
             q.next=l2
         }
        
     }
    
    return p.next
  
};

