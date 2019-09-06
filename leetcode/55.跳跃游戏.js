/**
 * 70/75，还有5个测试用例通不过，算法还是有待改进
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let st=0
    
    console.log(fun(nums,st))
    // return fun(nums,st)
};


var fun = function(nums,st){
   let m=nums[st]
   if(st+1===nums.length){
       return  true
   }else if(st>nums.length){
        return false
   }else{

       if(m>0){
           let flag=false
           
           for(let i=1;i<=m;i++){
                
               if(fun(nums,st+i)){      
                    flag=true
               }else{
                    if(!flag){
                       flag=false
                    }
               }                
           } 
           
           if(flag){
               return true
           }else{
               return false
           }
           
           
       }else{
            return false
       }
   }
}
var a=[8,2,4,4,4,9,5,2,5,8,8,0,8,6,9,1,1,6,3,5,1,2,6,6,0,4,8,6,0,3,2,8,7,6,5,1,7,0,3,4,8,3,5,9,0,4,0,1,0,5,9,2,0,7,0,2,1,0,8,2,5,1,2,3,9,7,4,7,0,0,1,8,5,6,7,5,1,9,9,3,5,0,7,5]
// var a=[3,2,1,0,4]
canJump(a)