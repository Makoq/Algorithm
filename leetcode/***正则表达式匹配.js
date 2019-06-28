
// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

// 说明:

// s 可能为空，且只包含从 a-z 的小写字母。
// p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
// 示例 1:

// 输入:
// s = "aa"
// p = "a"
// 输出: false
// 解释: "a" 无法匹配 "aa" 整个字符串。

//思路：利用递归思想，逐个按位比较，
//     遇到原字母和“.”的情况，都后移一位，当字母不同时返回false；
//     遇到“*”的情况，则又分为匹配0次和匹配多次的情况：
//         匹配0次：直接跳过模式串中的两位，如存在a*，则直接跳过这两位，看下一位与原字符串中当前位相同与否
//         匹配多次：原字符串后移位置索引，检查是否与*之前的字母相同

//     这里的递归，每次比较的都是第一位，每次移动的都是一位。遇到*的2种情况，只要有一种满足就可以，所以用||


 /**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s,p) {
    
  
    if(s.length===0&&p.length===0){
       return true
    }
    
    if(p.length===0){
        return false
    }
    
    
    let firstElement=(s.length!=0)&&(s[0]===p[0]||p[0]===".")
    
    //当模式中出现*
    if(p.length>=2&&p[1]==="*"){
        //*为为比较0次
        let case1=isMatch(s, p.substring(2))
        //*为比较多次
        let case2=firstElement&& isMatch(s.substring(1),p) 
        
        return case1||case2
        
    //当模式串中为原字母或者.时，都往后进一步进行匹配
    }else{
        
        return firstElement&& isMatch(s.slice(1,s.length),p.slice(1,p.length))
    }
        
};


//执行案例
//var a="aa",b="a*"
//isMatch(a,b)
