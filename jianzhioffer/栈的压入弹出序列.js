//输入两个整数序列，第一个序列表示栈的压入顺序，
//请判断第二个序列是否可能为该栈的弹出顺序。
//假设压入栈的所有数字均不相等。
//例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，
//但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）

//思路：利用入栈和出栈栈底元素是否相同，借助一个辅助栈，不同则入辅助栈，相同时入栈和出栈同时弹出栈底元素（shift）,
//当入栈元素都弹出后，用辅助栈栈顶与出栈栈底进行相等判断，同样相等时同时弹出，不等时出栈弹出元素入至辅助栈，直到出栈所有元素都被弹出
//当出栈所有元素都被弹出时，辅助栈也应该为空，否则就是不合理的出栈顺序序列

function IsPopOrder(pushV, popV)
{
   let arr=[]
   if(pushV.length!=popV.length||!pushV||!popV){
       return false
   }
    
   while(popV.length>0){
       if(pushV.length!=0&&pushV[0]!=popV[0]){
           arr.push(pushV.shift())
       }else{
           if(pushV.length==0){
               if(arr[arr.length-1]==popV[0]){
                   popV.shift();
                   arr.pop()
               }else{
               arr.push(popV.pop())
               }
               
            }else{
                pushV.shift();
                popV.shift();
            }
       }
   }
    if(arr.length!=0){
        return false
    }else{
        return true
    }
   
}
