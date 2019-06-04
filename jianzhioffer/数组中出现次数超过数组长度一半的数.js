//数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
//例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
//由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。


//思路：很简单
function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    let halfLen=numbers.length/2,r
    
    for(let i=0;i<numbers.length;i++){
        r=0
        for(let j=0;j<numbers.length;j++){
           
            if(numbers[i]==numbers[j]){
                r++;
            }
            
            
        }
        if(r>halfLen){
            return numbers[i]
        }
        
    }
    return 0
}
