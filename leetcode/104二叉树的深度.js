/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0

    let n=1
    let dp=deep(root,n)
    
    return dp
};

function deep(root,n){
    if(!root.left&&!root.right){
        return n
    }else{
        if(!root.left){
          return deep(root.right,n+1)         
        }else if(!root.right){
           
          return deep(root.left,n+1)
        }else{
         
            return Math.max( deep(root.left,n+1), deep(root.right,n+1))
        }
        
    } 
    
}