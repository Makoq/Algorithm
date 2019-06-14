//复制一棵现有的二叉树，返回新二叉根节点

function copy(pRoot){
    let p;
    if(!pRoot){
        return null
    }else{
        p=new TreeNode(pRoot.val);
    
        p.left=copy(pRoot.left)
        p.right=copy(pRoot.right)

        return p
    }

    
    
}
