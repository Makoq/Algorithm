//输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。

//思路：递归遍历到叶节点，统计经过的节点数目，这里注意用了一个栈来存储节点计数，
//      切记用一个普通的变量就不行了（递去得到计数，递回来时变为上层递归时的值），用一个全局遍历应该也是可以的，但会比较麻烦吧，而用一个数组就可以


  function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}  

function TreeDepth(pRoot)
{
    // write code here
    let arr=[],n=[-1]
    
    if(pRoot===null){
        return false
    }
    
    travelTree(pRoot,arr,n)
    console.log(n[0])
    return n
}

function travelTree(pRoot,arr,n){
   
    arr.push(pRoot)
    if(pRoot.left===null&&pRoot.right===null){
 
        if(n[0]<arr.length){
            n.pop()
            n.push(arr.length);
        }
        arr.pop();
        return ;
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
//测试用例
//var root= new TreeNode(0);
// root.left=new TreeNode(1);
// root.right=new TreeNode(2)
// root.left.left=new TreeNode(3);
//TreeDepth(root)
