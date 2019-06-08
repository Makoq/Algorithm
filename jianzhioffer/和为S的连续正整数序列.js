//小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。
//但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。
//没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。
//现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck!


//思路：1.从1开始遍历正整数，遍历数为开头数，和S为结尾数，因为连续数的和肯定要大于连续数
//     2.当和为S时，记录开头数到结尾数
//      很简单       
      

function FindContinuousSequence(sum)
{
    // write code here
    let s,el=[],re=[]
    if(sum==0||sum===1){
        return el
    }
    for(let i=1;i<sum;i++){
        s=0;
        for(var j=i;s!=sum&&s<sum;j++){
            s+=j;
             
        }
        if(s==sum){
            el=[]
            for(let k=i;k<j;k++){
                el.push(k);
            }
            re.push(el)
        }
    }
    
    return re;
}
