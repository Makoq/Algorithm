/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n=nums.length,arr=[],rep={}
    for(let i=0;i<n;i++){
        var ind=nums.indexOf(nums[i])
        if(arr.indexOf(nums[i])<0){
            rep[nums[i]]=1
            arr.push(nums[i])
        }else{
            rep[nums[i]]++
        }
    }
    let max=-1,key
    nums.forEach((v)=>{
        if(rep[v]>max){
            max=rep[v]
            key=v
        }
    })
    return key
};