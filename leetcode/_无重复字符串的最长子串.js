//给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

//示例 1:

//输入: "abcabcbb"
//输出: 3 
//解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

//示例 2:

//输入: "bbbbb"
//输出: 1
//解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

//思路：截取字符串进行唯一性监测，这里主要用了队列，删除重复项及其前面项，另外注意所有项都相同的情况

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    if(!s){
       return null
    }
    
    let sarr=[...s]
    let arr=[],lens=sarr.length,lena=0
    
    for(let i=0;i<lens;i++){
        
        if(arr.length===0||arr.indexOf(sarr[i])<0){
           arr.push(sarr[i])
            
        }else if(arr.indexOf(sarr[i])>-1){
           if(arr.length>lena){
              lena=arr.length
              }
              //因为是连续字符串，所以一旦遇到重复项，则删去工具栈中重复项及其前面的所有项，剩下不重复项的唯一字符串
            while(arr.shift()!=sarr[i]){
                  
                  }
            
            arr.push(sarr[i])
            
        }
        //注意所有项都相同的情况,或者不重复数组最后一项为原数组末尾的情况如字符串“”
        if((i+1)===lens){
           if(arr.length>lena){
              lena=arr.length
           }
        }
    }    
        
        
        
        
    return lena
    
};
