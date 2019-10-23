/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return []
    }
    let cur=1,next=0 //当前层未打印节点数，下一层未打印节点数
    let r=root
    let tmp=[],re2=[]
    tmp.push(r)
    re2.push([r.val])
    while(tmp.length>0){
        let tp=tmp.shift()
        cur--
        if(tp.left){
           tmp.push(tp.left)
            next++
            
        }
        
        if(tp.right){
           tmp.push(tp.right)
            next++
        }
        if(cur===0){
          let gg=[]
          tmp.forEach((v)=>{
              gg.push(v.val)
          })
         if(gg.length!=0){re2.push(gg)} 
            cur=next
            next=0            
        }  
    }  
    return re2
};