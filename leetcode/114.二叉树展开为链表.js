
  
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
* @param {TreeNode} root
* @return {void} Do not return anything, modify root in-place instead.
*/
var flatten = function(root) {
  
  if(!root){
      return null
  }
  
  var ar=[]
  
  f(root,ar)
  //先序遍历后，改变每个结点的左右子结点，让右结点为先序的下一个，左结点为空，这是个灵感
  for(let i=0;i<ar.length-1;i++){
      ar[i].left=null
      ar[i].right=ar[i+1]
  }
  
  return root

};

function f(r,ar){
  
  if(!r){return }
  ar.push(r)
  f(r.left,ar)
  f(r.right,ar)
  
}
