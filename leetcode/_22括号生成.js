//给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

//例如，给出 n = 3，生成结果为：

//[
//  "((()))",
//  "(()())",
//  "(())()",
//  "()(())",
//  "()()()"
//]

//这种解法超出了时间限制，最多到n=4，并没有在leetcode上提交通过，仍需要改进，先记着

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let arr=[],re=[]
    for(let i=1;i<=n;i++){
        arr.push('(',')')
        
    }
    
    pailie(arr,0,re)
    
    return re
    
};
//全排列
function pailie(str,i,re){

    if(i===str.length-1){
        let m=str.join("")
        if(re.indexOf(m)<0){
            if(test(str)){          
              re.push(m)  
            }
        }
       
       
    }else{

        for(let j=i;j<str.length;j++){

            let s=str[j]
            str[j]=str[i]
            str[i]=s      
            pailie(str,i+1,re)
            s=str[j]
            str[j]=str[i]
            str[i]=s
         
        }

    }

}

//测试括号匹配
function test(str){
    let st=[]
    for(let i=0;i<str.length;i++){
        if(str[i]==="("){
                st.push(str[i])
           }else if(str[i]===')'){             
               let t=st.pop()
               if(t!='('){
                   return false
               }   
           }
    }
    if(st.length!=0){
       return false
       }
    
    return true
    
    
}
