
// 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器，且 n 的值至少为 2。
// 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

// 示例:

// 输入: [1,8,6,2,5,4,8,3,7]
// 输出: 49

//思路：简单，可以一次解决，不过时间复杂度有待进一步优化

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    if(height.length<2){
        return 0
    }
    
    let s=0,a1,a2,minH,LEN
    for(let i=0;i<height.length;i++){
        for(let j=0;j<height.length;j++){
            if(i===j){
               continue;
               }
            minH=min(height[i],height[j])
            LEN=Math.abs(i-j)
            if(minH*LEN>s){
                s=minH*LEN;
                a1=i
                a2=j
               }
            
        }
    }
    
    return s
    
    
    
};


function min(a,b){
    if(a<b||a===b){
       return a;
       }
    else{
       return b;       
       }
}
