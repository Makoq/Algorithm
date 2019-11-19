/**
 * 时间复杂度较高的写法182 / 184 ,跑到183就超过了时间限制，时间效率上还是太弱
 * 但是关于如何优化三层迭代，还是需要技巧，下面用递归也进行了一次实现
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var max=-99999
    if(nums.length==1){
        return nums[0]
    }
    for(var i=1;i<=nums.length;i++){
        var arr=[]
        for(var j=0;j<=nums.length-i;j++){
            var tp=nums.slice(j,j+i)
            let mult=1
            tp.forEach((v)=>{mult*=v})
            arr.push(mult)
        }
        let m=Math.max.apply(this,arr)
        if(m>max){   
            max=m
        }
    }
    return max
};

/**
 * 递归写法182 / 184 ,跑到183就超过了时间限制，时间效率上还是太弱
 * 看了参考答案，那种方法有点太讨巧了，一般人想不出来吧
 * @param {number[]} nums
 * @return {number}
 */

ar maxProduct = function(nums) {
    var max=[]
    if(nums.length===1){
        return nums[0]
    }
    for(let n=1;n<=nums.length;n++){
        f(nums,n,max,-1)
    }
    
    return Math.max.apply(this,max)
    
};

/*
*i长度，s起点
*初始值，i=1,max=[],
*递归写法，动态规划
*/
function f(nums,i,max,s){
    if(i>nums.length) return
    if(s>-1){
        let mul=1
        for(let j=s;j<s+i;j++){
            mul*=nums[j]
        }
        max.push(mul)

    }else{
        for(let m=0;m<=nums.length-i;m++){
            let mult=1
            f(nums,i,max,m)
        }
          
    }
    //  f(nums,i+1,max,-1)     
}

//还有一版java实现的，同样时间效率上不太高效

class Solution {
    public int maxProduct(int[] nums) {
        
        List<Integer> max=new ArrayList<Integer>();
        if(nums.length==1){
            return nums[0];
        }
        for(int n=1;n<=nums.length;n++){
            f(nums,n,max,-1);
        }

        return maxValue(max);
    }

    public void f(int[] nums,int i,List<Integer> max,int s){
        if(i>nums.length) return;
        if(s>-1){
            int mul=1;
            for(int j=s;j<s+i;j++){
                mul*=nums[j];
            }
            max.add(mul);
        }else{
            for(int m=0;m<=nums.length-i;m++){
                int mult=1;
                f(nums,i,max,m);
            }        
        }
    }
    public Integer maxValue(List<Integer> list){
        Integer max=new Integer(-9999);
        for(int i=0;i<list.size();i++){
            if(list.get(i)>max){
                max=list.get(i);
            }
        }
        return max;
    }


}