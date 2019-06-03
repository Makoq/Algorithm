//输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
//要求不能创建任何新的结点，只能调整树中结点指针的指向。

//思路：中序遍历二叉搜索树，将每个节点push到数组里，形成有序的包含树节点的数组，在分别让每个节点指向其数组中相邻前后元素，很简单
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree)
{
    // write code here
    if(!pRootOfTree){
        return null;
    }
    let arr=[];
    
    midTravel(pRootOfTree,arr);
    
    for(let i=0;i<arr.length;i++){
        if(i===0){
            arr[i].left=null;
            if(arr.length>1){
                arr[i].right=arr[i+1]
            }else{
                arr[i].right=null
            }
            
        }else if((i===arr.length-1)&&i>0){
            arr[i].left=arr[i-1];
            arr[i].right=null;
        }else{
            arr[i].left=arr[i-1];
            arr[i].right=arr[i+1];
        }
    }
     
    return arr[0];
}
function midTravel(pRootOfTree,arr){
    if(pRootOfTree.left){
         midTravel(pRootOfTree.left,arr);
    }
   
        arr.push(pRootOfTree);

    if(pRootOfTree.right){
    midTravel(pRootOfTree.right,arr);
    }
}
