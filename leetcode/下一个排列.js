// 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

// 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

// 必须原地修改，只允许使用额外常数空间。

// 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 
// 1,2,3->1,3,2
// 3,2,1->1,2,3
// 1,1,5->1,5,1

//字典序思路：
// 1.从右至左，找到第一个左小雨右邻，将该左位置记为a
// 2.再从右至左，找到第一个大于该位的元素，将该位置记为b
// 2.交换位置a，b的元素
// 3.将a位置后的元素从小到大排序，over

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    let a=-1,b,c
    for(let i=nums.length-1;i>0;i--){
        if(nums[i-1]<nums[i]){
            a=i-1 
            break;
        }
    }
    
    if(a===-1){
       return  nums.reverse();
    }
    
    for(let i=nums.length-1;i>=0;i--){
        if(nums[i]>nums[a]){
           b=i
            break
        }
    }
    c=nums[a];
    nums[a]=nums[b]
    nums[b]=c
    
    for(let i=a+1;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]>nums[j]){
                c=nums[i]
                nums[i]=nums[j]
                nums[j]=c
            }
        }
    }
    
    return nums
    
    
};