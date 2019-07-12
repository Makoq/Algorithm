//给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

//给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

//2:"abc",3:"def",...,9:"wxyz"

//思路：重点在于利用递归凑出字母组合，其本质时一周树的路径遍历，巧用递归
//      主题思路分四部，已在代码中注释

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    if(digits.length===0){
        return []
    }
    let nums=[...digits],//1.获得数字数组
        words=['abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'],//2.构建字幕数组
        rewords=[],
        res=[],
        tep=''
    
    for(let i=0;i<nums.length;i++){
        let loc=Number(nums[i])-2
        
        rewords.push(words[loc])//3.根据数字数组凑出输入的数字组成的字幕数组
    }
    
    f(rewords,0,res,tep)//4.递归拼凑字幕组合，可以理解为树路径遍历的解法
    
    console.log(res)
    return res
    
};

function f(nums,i,res,tep){//输入数字代表的字幕数组，当前字幕数组位置，结果数组，拼接字幕组合字符串
 
    if(tep.length===nums.length){//当拼凑的字符长度与原始输入的数字数组长度相同时，即简单理解为一个数字代表一个字母，数字数与最后拼接的字幕元素个数相同
        res.push(tep)//将拼接的字幕组合推入结果数组中
        
    }else{
        
        for(let j=0;j<nums[i].length;j++){
            
            tep+=nums[i][j]//拼接数组
            f(nums,i+1,res,tep)
            tep=tep.slice(0,-1)//每趟递归结束后，删除最后一个元素即清除每次递归添加的元素，很巧妙
        }
        
    }
}
