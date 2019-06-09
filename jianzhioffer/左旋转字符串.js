//汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。
//对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。
//是不是很简单？OK，搞定它！

//思路：很简单，移动就行，但要考虑取余

function LeftRotateString(str, n)
{
    // write code here
    if(!str){
        return ""
    }
    
    let [...arr]=str;
    
    let move=n%arr.length,arr1=[],arr2=[],res="";
    if(move===0||move===arr.length){
        return str;
    }else{
        arr1=arr.slice(0,move);
        arr2=arr.slice(move,arr.length)
        
        
    }
    arr2.concat(arr1).forEach((v)=>{res+=v})
    return res
    
}
