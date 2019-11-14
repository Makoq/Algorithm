/**
 * 利用一个indexoF()函数，灵感题
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    if(nums.length===0){return null}
    
    let len=nums.length
    for(let i=0;i<nums.length;i++){
        
        if(i===len-1){return nums[i]}
        let ind = nums.indexOf(nums[i])
        let arr=nums.slice(ind+1,len)
        if(arr.indexOf(nums[i])>-1){
            continue
        }else return nums[i]
        
    }
};