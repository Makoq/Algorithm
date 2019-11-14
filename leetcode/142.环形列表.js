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
var detectCycle = function(head) {
    let s=head,arr=[]
    if(!head){      
        return null
    }
    while(s!=null){
        
        if(arr.indexOf(s)===-1){
            arr.push(s)        
        }else{
            return s
        } 
        s=s.next
    }
    if(!s){    
        return null   
    }
    
};

//java 版本

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */

public class Solution {
    public ListNode detectCycle(ListNode head) {
        if(head==null){
            return null;
        }
        List arr=new ArrayList<>();
        ListNode f;
        f=head;
        while(f.next!=null){
            if(arr.indexOf(f)<0){
                arr.add(f);
            }else{
                return f;
               
            }
            f=f.next;
        }

        if(f.next==null){
            return null;
        }
        
        return null;
    }
}