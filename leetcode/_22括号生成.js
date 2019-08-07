//给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

//例如，给出 n = 3，生成结果为：

//[
//  "((()))",
//  "(()())",
//  "(())()",
//  "()(())",
//  "()()()"
//]


//解法1：暴力解法，列出所有的排列情况，从中筛选出合理的情况，
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

//解法2：回溯法（向前探索，走不通再返回），参考leetcode标准解法，已通过leetcode的提交
//     这种解法也很简单，很好理解
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let res=[] 
    
    if(n<=0){
       return []
    }
    else{
        fc(res,'',0,0,n)
    }
    return res
    
};

function fc( res,cul,open,close,max){
    
    if(cul.length===max*2){
        if(check(cul)&&res.indexOf(cul)<0){
             res.push(cul)
        }
       
        return
    }else{
        if(open<max){
            fc(res,cul+'(',open+1,close,max)
        }
        if(close<max){
           fc(res,cul+')',open,close+1,max)
        }
        
        
    }
}

function check(arr){
    let a=arr.split("")
    let st=[]
    for(let i=0;i<a.length;i++){
        if(a[i]==='('){
            st.push(a[i])
        }else if(a[i]===')'){
           
            st.pop()
        }
    }
    
    if(st.length!=0){
       return false
       }
    else return true
}



