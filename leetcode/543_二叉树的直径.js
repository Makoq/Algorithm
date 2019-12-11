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
var diameterOfBinaryTree = function(root) {
    if(root===null) return []
    if(root.left===null&&root.right===null){
        return 0
    }
    let re=[]
    travel(root,re)
    return Math.max.apply(this,re)-1
};
function travel(root,re){
    let left=[],right=[],a1=[[]],a2=[[]]
    deep(root.left,left,a1)
    deep(root.right,right,a2)
    re.push(a1[0].length+a2[0].length+1)
    if(root.left!=null){
        travel(root.left,re)
    }
    if(root.right!=null){
        travel(root.right,re)
    }
}

function deep(root,arr,a){
    
    if(root===null) return
    arr.push(root.val)
    if(root.left==null&&root.right==null){
        if(arr.length>a[0].length){
            //深拷贝
            let tp=[...arr]
            a[0]=tp
        }
    }
    if(root.left!=null){
        deep(root.left,arr,a)
        arr.pop()
    }
    if(root.right!=null){
        deep(root.right,arr,a)
        arr.pop()
    }
}