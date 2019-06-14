//从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。


//思路：在层次遍历时，利用先取得每一次遍历开始时的队列长度作为树中一层元素的个数，这是一个获取每一层的技巧
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    // write code here
    
    if(!pRoot){
        return []
    }
    
    let arr=[],val,pri=[],len
    arr.push(pRoot)
 
    while(arr.length>0){
        len=arr.length
        let hang=[]
        for(let i=0;i<len;i++){
            val=arr.shift()
            hang.push(val.val)
            
            if(val.left){
                arr.push(val.left)
            }if(val.right){
                arr.push(val.right)
            }
        
        }
            
         pri.push(hang)
    }
    
    return pri
}
