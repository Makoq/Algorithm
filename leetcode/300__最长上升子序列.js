/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

    if(nums.length===0) return 0
    let arr=[]

    //初始化自身作为最长序列，值为1
    for(let j=0;j<nums.length;j++){
        arr[j]=1
    }

    for(let i=0;i<nums.length;i++){
        if(i===0){
            continue
        }else{
            //如果前面的值有小于新值的情况
            let m=nums.slice(0,i)
            if(nums[i]>Math.min.apply(this,m)){
                let max=1
                for(let k=0;k<i;k++){
                    //找到前面值小于新值且最大的子序列值
                    if(nums[k]<nums[i]&&max<arr[k]){
                        max=arr[k]
                    }
                }
                //将前面的最大子序列值与当前子序列值（1）相加
                arr[i]+=max
            }
        }
    }
    //返回最大子序列值
    return Math.max.apply(this,arr)
};
