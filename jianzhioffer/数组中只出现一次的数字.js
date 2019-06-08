//一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。

//思路：找到出现一次以上的数字并入栈，之后利用该栈在原数组里找到只出现一次的数字，soeasy


function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    
    let left=[],tep=[],res=[]
    
    if(array.length===0){
        return null
    }
    
    for(let i=0;i<array.length;i++){
        left=array.slice(i+1,array.length);
        if(left.indexOf(array[i])>-1){
            tep.push(array[i]);
        }
    }
    
    for(let j=0;j<array.length;j++){
        if(tep.indexOf(array[j])<0){
            res.push(array[j])
        }
    }
    
    return res
    
}
