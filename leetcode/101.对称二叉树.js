/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root||!root.left&&!root.right) return true
    
     if(f(root,root)){
         return true
     }else return false
  };
  
  
  function f(l,r){
     if(l===null&&r===null)return true
     if(l===null||r===null)return false
      return (l.val===r.val)&&f(l.left,r.right)&&f(l.right,r.left)
  }