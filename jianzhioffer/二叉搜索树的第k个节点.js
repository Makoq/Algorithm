//给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。

//思路：简单
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot,k)
{
    // write code here
    var arr=[]
    if(!pRoot||k<1){
        return null
    }
    
    midTravel(pRoot,arr);
    
    if(k>arr.length){
        return null
    }
    //console.log(arr[k-1])
    return arr[k-1]
    
}

function midTravel(pRoot,arr){
    
    if(pRoot.left){
        midTravel(pRoot.left,arr)
    }
    
    arr.push(pRoot)
    
     if(pRoot.right){
        midTravel(pRoot.right,arr)
    }
    
}
