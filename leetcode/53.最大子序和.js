 
 
 /**
 * 时间复杂度为O(n2)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let max=nums[0]

    for(let len=0;len<nums.length;len++){
        
        for(let e=len+1;e<=nums.length;e++){
           
           if(nums.slice(len,e).reduce((ac,cu)=>{return ac+cu}) >max){
            max=nums.slice(len,e).reduce((ac,cu)=>{return ac+cu})
           }
        }
    }

    return max
};
 

/**
 * 时间复杂度为O(n)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let max=nums[0],sum=0

    for(const num of nums){
        if(sum+num>num){
            sum+=num
        }else{
            sum=num
        }
        
        max=Math.max(sum,max)
    }
   
    
    return max
};


//https://leetcode-cn.com/problems/maximum-subarray/solution/xiang-xi-jie-du-dong-tai-gui-hua-de-shi-xian-yi-li/



a=[-3,-2,-2,-3]
maxSubArray(a)






