 //将每一项拆解成多个1数组，计算1数组之间的空元素数目，这里利用了给js对象赋属性的方式
 
 /**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    let arr=height,obj={},len=0
    
    
    arr.forEach((v,ind)=>{
        if(v>0){
            let arr2=[]
            while(v>0){
                arr2.push(1)
                v-=1
            }
            obj["el"+ind]=arr2
            
            if(obj["el"+ind].length>len){
                len=obj["el"+ind].length
            }

        }else{
            obj["el"+ind]=[]
        }
    })

    let num=0,flag=true,flag2=true,loc

    while(len>0){
        for(let i=0;i<arr.length;i++){ 

            if(obj["el"+i].length>0&&flag){
                flag=false
                loc=i
                obj["el"+i].pop()
                
            }else if(obj["el"+i].length===0&&!flag){
                num++
                
            }else if(obj["el"+i].length>0&&!flag){
                loc=i
                obj["el"+i].pop()
            }     
        }

        len--
        flag=true
        num=num-(arr.length-loc-1)
    }
    console.log(num)

};


  