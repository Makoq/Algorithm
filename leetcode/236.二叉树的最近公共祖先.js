/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var arr=[]
    f(root,p,q,arr)
    return arr[0]
};
function f(r,p,q,arr){
    
     if(r===null) return false
     let left=f(r.left,p,q,arr)?1:0
     let right=f(r.right,p,q,arr)?1:0
     let mid=(r.val===p.val||r.val===q.val)?1:0

     if(left+right+mid>=2){
         arr.push(r)
     }
     return (left+right+mid)>0
}