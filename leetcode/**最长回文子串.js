//给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

//示例 1：

//输入: "babad"
//输出: "bab"
//注意: "aba" 也是一个有效答案。
 
 
 //思路：依据manacher的算法，把原来的字符串每一项左右插入“#”,构造成奇数项，然后以逐个元素为中心，左右延伸，找到最大子回文
 //参考：https://blog.csdn.net/romeo12334/article/details/84034485
 
 /**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    if(!s){
       return ""
       }
    let len=0,m=0
    
   
    s="#"+s.split("").join("#")+"#"

    for(let i=0;i<s.length;i++){
        let l=i-1,r=i+1,k=0
        
        while(l>-1&&r<s.length&&(s[l]===s[r])){
              k++;
              l--;
              r++;
        }
        
        if(k==len||k>len){
           len=k;
            m=i
           }
        
    }
    
    let res=s.slice(m-len,m+len+1),b=""
    
    
    res=res.split("#")
 
    if(res[0]===""){
        res=res.slice(1,-1)
    }
    
    res.forEach((v)=>{b+=v})
    
//     res=[...res]
   
//     res.forEach((v)=>{
//        if(v!="#"&&v!=""){
//           b+=v
//           }
        
//     })
    return b
    
    
};
