//输入一棵二叉树，判断该二叉树是否是平衡二叉树。

//思路：判断平衡二叉树就是判断左右子树深度差值是否不为1或0，其实就是利用一个求深度的函数遍历一下左右子树就可以了，很简单

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot)
{
    // write code here
    if(!pRoot){
        return true;
    }
    return travelBalanceTree(pRoot)
    
}
function travelBalanceTree(pRoot){
   
        if(Math.abs(TreeDepth(pRoot.left)-TreeDepth(pRoot.right))>1){
            return false;
        }else{
            return true;
        }
    
    
    return travelBalanceTree(pRoot.left)&& travelBalanceTree(pRoot.right);
}


function TreeDepth(pRoot)
{
    // write code here
    let arr=[],n=[-1]
    if(pRoot===null){
        return 0
    }
   
    
    travelTree(pRoot,arr,n)
    
    return n[0]
}

function travelTree(pRoot,arr,n){
    
    arr.push(pRoot)
    if(pRoot.left===null&&pRoot.right===null){
 
        if(n[0]<arr.length){
            n.pop()
            n.push(arr.length);
        }
        arr.pop();
        return;
    }
    
    if(pRoot.left!=null){
        travelTree(pRoot.left,arr,n);
    }
    if(pRoot.right!=null){
        travelTree(pRoot.right,arr,n);
    }else{
        arr.pop();
    }
    
    
}
