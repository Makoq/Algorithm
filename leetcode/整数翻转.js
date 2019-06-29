// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21
// 注意:

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

 
 
//思路：很简单，数字转为字符串，逐个遍历，三种情况下的条件判断，1.末尾为0,2.有负号，3.既没有负号又没有末尾0位，转为字符串，再转为数字

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num=x.toString(),len=num.length,res=[],r="",flag=false
  
    for(let i=len-1;i>=0;i--){
        if(num[i]==="0"&&!flag){
            
            continue
        }else
        if(i==0&&num[i]==="-"){
            res.unshift("-")
        }else{
            flag=true
            res.push(num[i])
        }
 
    }
    
    res.forEach((v)=>{r+=v})

    x=Number(r)
     if(x<Math.pow(-2,31)||x>(Math.pow(2,31)-1)){
        return 0
    }
    
    
    return x
    
};
