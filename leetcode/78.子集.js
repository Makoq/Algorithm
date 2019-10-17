/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let n=nums.length,res=[]
    
    for(let i=0;i<=n;i++){
        if(i===0){
           res.push([])
       }else if(i===n){
           res.push(nums)     
       }else{
           let re=[],t=[]
           f(nums,i,t,0,re)
           re.forEach((v)=>{
               res.push(v)
           })      
       }
    }
    
   return res
};

function f(arr,n,tp,j,re){
    if(n===0){
        let m=[...tp]
        re.push(m)
        tp.pop()
    }else{       
        for(let i=j;i<arr.length;i++){
             tp.push(arr[i])            
            f(arr,n-1,tp,i+1,re)                 
        }      
        tp.pop()
    }
    
    
    
}