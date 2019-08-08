//二分查找


//1.简单循环

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    if(nums.indexOf(target)<0){
        return [-1,-1]
    }
    let start,end,flag=-1
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target&&flag===-1){
           start=i
           flag=1
         }
        if(flag===1&&i<nums.length-1&&nums[i+1]!=target){
            end=i
            
            break
        }
        if(flag==1&&i==nums.length-1){
           end=i
            flag
            break
           }
    }
    return [start,end]

};

//2.二分查找

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    if(nums.indexOf(target)<0){
        return [-1,-1]
    }
    
    let l=0,r=nums.length,m
  
    while(l<=r){
        m=parseInt((l+r)/2)
        
        if(nums[m]===target){
           break
         }else{
             if(nums[m]<target){
                l=m+1
              }
             if(nums[m]>target){
                r=m-1
            }
         }
    }
    l=m
    while(nums[l]===target&&l>=0){
        l--
    }
    
    r=m
    while(nums[r]===target&&r<nums.length){
        r++
    }
    
    
    return [l+1,r-1]

};