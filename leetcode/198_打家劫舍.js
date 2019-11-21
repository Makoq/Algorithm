//动态规划思路
//打劫前k个房屋，获得的最大值，是前k-1个房屋的最大值，和前k-2个房屋最大值加当前房屋值，这两个值的最大值
var rob = function(nums) {
    let arr=[]
    if(nums.length===0){
        return 0
    }
    else if(nums.length===1){
        return nums[0]
    }
    arr[0]=0
    arr[1]=nums[0]
    for(let i=2;i<=nums.length;i++){
        arr[i]=Math.max(arr[i-1],arr[i-2]+nums[i-1])
    }
    return arr[nums.length]
    
};