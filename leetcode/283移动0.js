/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let n=0,len=nums.length
    for(let i=0;i<len;i++){
        if(nums[i]===0){
            nums.splice(i,1)
            i--
            n++
        }
    }
    // console.log(nums)
     for(let i=0;i<n;i++){
         nums.push(0)
     }
    
     
};