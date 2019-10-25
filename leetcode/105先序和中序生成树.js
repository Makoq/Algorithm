
  
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
   
     let root=new TreeNode(preorder[0])
    if(!preorder && !inorder){
    
         root=null
    }
    
    let indRoot=inorder.indexOf(preorder[0])
    
    let inleft=inorder.slice(0,indRoot),inright=inorder.slice(indRoot+1)
    let preleft=preorder.slice(1,1+inleft.length),preright=preorder.slice(1+inleft.length)
    
   
    
    travel(root,inleft,inright,preleft,preright)
    
    
    return root
};

function travel(tree,inleftTree,inrightTree,preleft,preright){
     

    if(inleftTree.length===0){
      tree.left=null
    }else{
        tree.left=new TreeNode(preleft[0])
        
        let indRoot=inleftTree.indexOf(preleft[0])
        let inleft=inleftTree.slice(0,indRoot),inright=inleftTree.slice(indRoot+1)
        let pleft=preleft.slice(1,1+inleft.length),pright=preleft.slice(1+inleft.length,preleft.length)
        travel(tree.left,inleft,inright,pleft,pright)
    }
    
     if(inrightTree.length===0){
       return
    }else{
        
        tree.right=new TreeNode(preright[0])
        let indRoot=inrightTree.indexOf(preright[0])
        
        let inleft=inrightTree.slice(0,indRoot),inright=inrightTree.slice(indRoot+1,inrightTree.length)
        let pleft=preright.slice(1,1+inleft.length),pright=preright.slice(1+inleft.length,preright.length)
        
        travel(tree.right,inleft,inright,pleft,pright)
    }
}