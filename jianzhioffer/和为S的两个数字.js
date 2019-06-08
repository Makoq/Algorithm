//输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。

//思路：很简单

function FindNumbersWithSum(array, sum)
{
    // write code here
    let nums=[],mul,res=[],tep
    for(let i=0;i<array.length;i++){
         tep=sum-array[i];
        if(array.indexOf(tep)>-1&&array.indexOf(tep)!=i&&nums.indexOf(tep)<0){
            nums.push(array[i]);
            nums.push(array[array.indexOf(tep)])
        }
    }
    
    if(nums.length>=2){
        mul=nums[0]*nums[1];
         res[0]=nums[0];
        res[1]=nums[1]
        for(let k=0;k<nums.length-1;k++){
            if(nums[k]*nums[k+1]<mul){
                res[0]=nums[k];
                res[1]=nums[k+1];
                mul=nums[k]*nums[k+1]
            }
        }
    }
    
    return res
    
    
}
