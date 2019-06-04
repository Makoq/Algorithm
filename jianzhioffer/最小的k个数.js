//输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。

//思路：简单
function GetLeastNumbers_Solution(input, k)
{
    // write code here
    let arr=input.sort(),res=[]
    if(k>arr.length ){
        return false
    }
    for(let i=0;i<k;i++){
        res.push(arr[i]);
    }
     
    return res
    
    
}
