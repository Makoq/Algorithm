
 
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
 
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root||!root.left&&!root.right) return true
    
    if(root.left!=null&&root.right!=null){
       
        if(root.left.val===root.right.val){
          if(f(root.left,root.right)){
              return true
          }else{
              return false
          }
            
    }
        
     }else return false
};


function f(l,r){
    if(!l&&!r) {
        return true}
    else if((!l&&r)||(!r&&l)) {
        return false}
    else{
    
        if((!l.left&&!r.right&&l.right&&r.left&&l.right.val===r.left.val)||(!l.right&!r.left&&l.left&&r.right&&l.left.val===r.right.val))                 
        {return true}   
        else if(l&&r&&l.val===r.val&&!l.left&&!l.right&&!r.left&&!r.right) {
            return true}
        else if(l.left.val===r.right.val&&l.righ.val===r.left.val){
             if(f(l.left,r.right)&&f(l.right,r.left)){
                    return true       
            }else return false
           
        }else return false
    }
}

let n1=new TreeNode()
n1.val=1
n1.left=new TreeNode()
n1.left.val=2
n1.right=new TreeNode()
n1.right.val=2

n1.left.left=new TreeNode()
n1.left.left.val=3
n1.left.right=new TreeNode()
n1.left.right.val=4

n1.right.left=new TreeNode()
n1.right.left.val=3
n1.right.right=new TreeNode()
n1.right.right.val=4

isSymmetric(n1)