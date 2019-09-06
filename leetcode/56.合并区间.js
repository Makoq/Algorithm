 
 /**
  * 168 / 169 还是时间效率的问题
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
 
    for(inter of intervals){
        inter.sort((a,b)=>{
            return a-b
        })
    }
   intervals.sort((a,b)=>{
        return a[0]-b[0]
    })
    
     let del=[]
    for(let i=0;i<intervals.length;i++){
       
        for(let j=i+1;j<intervals.length;j++){
            
            let a=Math.max.apply(this,intervals[i]),b=Math.min.apply(this,intervals[j])
            if(a>=b){
                
                let loc2=-1,loc1=-1
                intervals[j].forEach((v,i)=>{
                    if(v>=a){
                       loc1=i 
                    }
                })
                
                 intervals[i].forEach((v,i)=>{
                    if(v<=b){
                       loc2=i 
                    }
                })

                if(loc2===-1){
                    intervals[i]=intervals[j]
                    // intervals.splice(i,1)
                    del.push(i)
                    
                }if(loc1===-1){
                    // intervals.splice(j,1)
                     del.push(j)
                    
                     
                }else{
                    if(a!=b){intervals[i]=intervals[i].slice(0,loc2+1)}
                    else{intervals[i]=intervals[i].slice(0,loc2)}
                                     
                    intervals[i]=intervals[i].concat(intervals[j].slice(loc1))
                    // intervals.splice(j,1) 
                     del.push(j)
                }               
            }
        }
        


    }    
    
    del=Array.from(new Set(del))

    while(del.length){
        intervals.splice(del.pop(),1)
    }

     

 
    
    console.log(String(intervals))
    return intervals
    
};

//几种类型的测试用例，代表几种不同的数据情况
a=
// [[1,4],[0,4]]
[[1,4],[0,2],[3,5]]
// [[1,4],[2,3]]
// [[1,3],[8,10],[2,6],[15,18]]
merge(a)






