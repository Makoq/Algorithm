//给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。

//思路：先利用其指向父节点的指针找到树的父节点，中序遍历树，并把遍历序列存在数组里，然后遍历数组找到已知节点的下一个节点就ok了，很简单



/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode)
{
    // write code here
    
    let p=pNode,arr=[]
    if(!pNode){
        return null
    }
    while(p.next!=null){
        p=p.next;
    }
    
     midTra(p,arr);
    //注意i的作用域
    for(var i=0;i<arr.length;i++){
        if(arr[i]===pNode){
            break
        }
    }
    if(i===arr.length){
        return null
    }
    return arr[i+1]
    
}
//注意中序遍历别忘了arr存储遍历序列
function midTra(p,arr){
    if(p.left){ 
        midTra(p.left,arr)
    }
    if(p){
      arr.push(p)  
    } 
    if(p.right){
        midTra(p.right,arr)
    }
    
}
