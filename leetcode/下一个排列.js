// 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

// 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

// 必须原地修改，只允许使用额外常数空间。

// 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 
// 1,2,3->1,3,2
// 3,2,1->1,2,3
// 1,1,5->1,5,1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    let str=nums,a=-1,b,tep
   
    
    for(let i=str.length-1;i>0;i--){
        if(str[i]>str[i-1]){
            a=i-1;
            break;
        }
    }
    
    if(a<0){
        
        str.reverse()
        return str;
        
       }
    
    for(let i=str.length-1;i>0;i--){
        if(str[i]>str[a]){
            b=i;
            break;
        }
    }
    
    tep=str[a]
    str[a]=str[b]
    str[b]=tep
    
    
    let afterb=str.slice(a+1,str.length)
    
    so(afterb)
     
    
    let beforeb=str.slice(0,a+1)
    console.log(beforeb.concat(afterb))
    // return beforeb.concat(afterb)
};

function so(str){
    let tep
    for(let i=0;i<str.length-1;i++){
        for(let j=i+1;j<str.length;j++){
            if(str[i]>str[j]){
                   tep=str[i]
                   str[i]=str[j]
                   str[j]=tep
                   
               }
        }
    }
}



var a=[1,3,2]
nextPermutation(a)