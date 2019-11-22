/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    //1.构造入度表
    let rudu=[]
    for(let i=0;i<numCourses;i++){
        rudu[i]=0
    }
    prerequisites.forEach((v)=>{ 
        rudu[v[0]]++
    })
    // console.log(rudu)
    //2.将入度为0的节点入队列
    let queue=[]
    rudu.forEach((v,i)=>{
        if(v===0) queue.push(i)
    })
    //3.入度为零出队列，出队列次数应该与numCourses相同
    while(queue.length>0){
        let ke=queue.shift()
         numCourses--
        prerequisites.forEach(v=>{
            //4.课程列表里前一个节点与出度节点匹配时，他的相邻节点入度-1，并且在图中删除该节点
            if(v[1]===ke){
                rudu[v[0]]-=1
               //5.入度为零的节点入队列
                if(rudu[v[0]]===0){
                    queue.push(v[0])
                }
            }
        })
    }
    //  出队次数应该与课程数相同，否则就是有环，不符合题设，返回false
    if(numCourses===0){
        return true
    }else return false
    
};