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

            
            if(has.indexOf(strs[i].split("").sort().join(""))<0){
                arr.push([strs[i]])
            }else{
                for(let j=0;j<arr.length;j++){
                    if(arr[j][0].split("").sort().join("")===strs[i].split("").sort().join("")){
    
                        arr[j].push(strs[i])
                    }
                }
            }
    

            
        
        }
    }
    
    // return arr
    console.log(arr)
    
};

var a=["eat","tea","tan","ate","nat","bat"]

groupAnagrams(a)