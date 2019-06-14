//请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推

//思路：利用好存储每一行的数组，然后按照不同行进行颠倒，之后存入结果数组里

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
    
    let arr=[],val,pri=[],hang,len,i=1
    arr.push(pRoot)
    
    while(arr.length>0){
        
        len=arr.length
        hang=[]
       for(let i=0;i<len;i++){
           
           val=arr.shift()
           hang.push(val.val)
        
            
            if(val.left){
                arr.push(val.left)
            }
            if(val.right){
                arr.push(val.right)
            }

        }
        if(i===0){
            hang.reverse();
             
            i=1 
            
        }else{
            
            i=0
        }
        pri.push(hang)
         
    }
    
     return pri
} 
