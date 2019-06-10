//求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

//思路：位运算左移一位表示原数*2，右移一位表示原数/2，把这个数列看作等差数列求和，利用求和公式n*(n+1)/2=(n^2+n)/2，把“/2”用右移一位代替

function Sum_Solution(n)
{
    // write code here
    
 
        return (Math.pow(n,2)+n)>>1
    
    
    
}
