//写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。


//思路：　1）先不考虑进位，按位计算各位累加（用异或实现），得到值a；
//      　2）然后在考虑进位，并将进位的值左移，得值b，若b为0，则a就是加法运算的结果，若b不为0，则a+b即得结果（递归调用该函数）。

//参考博客：
//https://blog.csdn.net/hnxijie/article/details/51482274
//https://blog.csdn.net/zdy0_2004/article/details/49407037


function Add(num1, num2)
{
    // write code here
    
     if(num2==0)
         return num1;
     let sum = num1^num2;
     let carry =(num1&num2)<<1;
     return Add(sum,carry);
}
