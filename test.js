/**
<<<<<<< HEAD
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
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
            // return i
            console.log(i)
        }
=======
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let res=[],ori=['(',')']
    
    if(n<=0){
       return []
       }
    else if(n===1){
            return ori
        }
    else return fc(n,res,ori)
    
};

function fc(n,res,ori){
    
    if(n===1){
        console.log(res)
        // return res
    }else{
        
        
>>>>>>> 00d92df4318ba3cf37b270b55d5c0bfb943fa321
    }


<<<<<<< HEAD
    return -1
};

var a=[4,5,6,7,0,1,2]
search(a,3)
=======
generateParenthesis(2)

>>>>>>> 00d92df4318ba3cf37b270b55d5c0bfb943fa321
