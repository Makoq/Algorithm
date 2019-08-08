//利用了二分查找

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    if(nums.length===0||nums.indexOf(target)<0){
        return -1
    }
     let minIndx,minValue=nums[0]
    
    for(let j=0;j<nums.length;j++){
        if(nums[j]<minValue){
            minValue=nums[j]
            minIndx=j
        }
    }
    
    let newNums=nums.slice(minIndx,nums.length).concat(nums.slice(0,minIndx))
    
    let l=0,r=newNums.length,m,flag=-1
    
    while(l<=r){
        
        m=parseInt((l+r)/2)

        if(newNums[m]===target){
        //  return m  
            flag=1         
            break;
        }else{
            if(newNums[m]<target){
                l=m+1
                
            }else if(newNums[m]>target){
                r=m-1    
            }   
        } 
    }
    if(flag===-1){
        return -1
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]===newNums[m]){
            return i
            // console.log(i)
        }
    }


    return -1
};