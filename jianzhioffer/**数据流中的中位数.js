//如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，
//那么中位数就是所有数值排序之后位于中间的数值。
//如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。
//我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。

//有思路：但是老是通过不了浏览器编译，感觉代码没有问题，烦

let nums=[]
function Insert(num)
{
    // write code here
    let len=nums.length
    if(len===0){
        nums.push(num)
    }else {
       let i=len-1;
       while(i>=0&&nums[i]>num){
           nums[i+1]=nums[i]
           i--;
       }
        nums[i+1]=num
        //nums.splice(i,0,num)
    }
    
    
}
function GetMedian(){
	// write code here
    
    let len=nums.length
   
    if(len%2===0){
        console.log((nums[(len/2)-1]+nums[len/2])/2)
        return (nums[(len/2)-1]+nums[len/2])/2;
    }else{
        console.log(nums[(len+1)/2-1])
        return nums[Math.floor(len/2)]
    }
    
    
}
