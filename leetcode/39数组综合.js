//回溯法

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
    let cu=[],res=[]
    if(candidates.length===0){
        return []
    }
    fc(candidates,cu,target,res)
   // console.log(res)
    return res
    
};

function fc(ca,cu,target,res){
    
    let he=0
    cu.forEach((v)=>{
        he+=v
    })

    if(he<=target){
        if(he===target){
            let [...c]=cu,flag=0
            c.sort()
            for(let i=0;i<res.length;i++){
                if(res[i].join("")===c.join("")){
                    flag=1
                    break
                }
            }
            if(flag===0){//当结果未有先例时录入
                 res.push(c)
            }
             cu.pop()//弹出符合要求后的最后一个值，进行检查下一个值的继续步骤
             return
             
         }else{     
             for(let i=0;i<ca.length;i++){
                 cu.push(ca[i])
                 fc(ca,cu,target,res)           
             } 
             cu.pop()//末尾值一次检查过后，弹出倒数第二个数          
         }
    }else{
        cu.pop()//入数后和大于目标，直接将该值弹出
        return
    }

    
    
    
}
let a= [2,3,6,7]

combinationSum(a,7)