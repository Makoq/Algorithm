//操作给定的二叉树，将其变换为源二叉树的镜像。
//二叉树的镜像定义：源二叉树 
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5
      
 /* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    // write code here
    let quee=new Array()
    
    if(!root){
        return false;
    }
    
    quee.push(root);

    while(quee.length>0){
        let p=quee.shift();
        let v=p.left;
        p.left=p.right;
        p.right=v;
        if(p.left){
            quee.push(p.left);
        }
        if(p.right){
            quee.push(p.right);
        }
        
    }
    
    return root;
    
}
