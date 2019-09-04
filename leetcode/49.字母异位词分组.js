/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let arr=[]
    
    for(let i=0;i<strs.length;i++){
        
        if(arr.length===0){
            let arr2=[]
            arr2.push(strs[i])
            arr.push(arr2)
        }else{
            
            //if arr no strs[i],arr push strs[i]
            let has=[]
            for(let k=0;k<arr.length;k++){
                has.push(arr[k][0].split("").sort().join(""))
            }

            //当结果数组中不含当前遍历元素时直接push进去
            if(has.indexOf(strs[i].split("").sort().join(""))<0){
                arr.push([strs[i]])
            }else{
            //当结果数组中含有当前遍历元素时，push到同类数组中
                for(let j=0;j<arr.length;j++){
                    if(arr[j][0].split("").sort().join("")===strs[i].split("").sort().join("")){
    
                        arr[j].push(strs[i])
                    }
                }
            }          
        }
    }
    
    return arr
    // console.log(arr)
    
};