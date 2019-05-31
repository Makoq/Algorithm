//定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。

//这道题其实非常简单，但一开始我有些懵，对于定义一个全局变量这种方式没敢想，另外，对于apply的使用也有待进一步的加强
var arr=[]
function push(node)
{
    arr.push(node);
}
function pop()
{
    return arr.length!=0?arr.pop():null
}
function top()
{
    return arr.length!=0?arr[0]:null
}
function min()
{
    return Math.min.apply(this,arr)
}
