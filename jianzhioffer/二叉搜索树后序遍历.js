//输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
//如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

//思路：利用后续遍历和二叉搜索树的性质，后续遍历最后一个是根节点，该序列中最后节点前面包含两部分，
//      第一部分是左子树，该部分值都小于根节点，第二部分为右子树这部分都大于根节点，
//      同理左、右子树又可以分为更深的子树，还是用递归来解决

function VerifySquenceOfBST(sequence)
{
    // write code here
     if(!sequence.length) {
        return false;
    }
    return adjustSquence(sequence,0,sequence.length-1);
}
function adjustSquence(sequence,start,end) {
    if(start >= end) {
        return true;
    }
    var i = start;
    while(i < end && sequence[i] < sequence[end]) {
        i++;
    }
    for(var j = i; j < end; j++){
        if(sequence[j] < sequence[end]) {
            return false;
        }
    }
    return adjustSquence(sequence,start,i-1) && adjustSquence(sequence,i,end-1)
}
