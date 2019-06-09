//LL今天心情特别好,因为他去买了一副扑克牌,发现里面居然有2个大王,2个小王(一副牌原本是54张^_^)...他随机从中抽出了5张牌,
//想测测自己的手气,看看能不能抽到顺子,如果抽到的话,他决定去买体育彩票,嘿嘿！！“红心A,黑桃3,小王,大王,方片5”,“Oh My God!”
//不是顺子.....LL不高兴了,他想了想,决定大\小 王可以看成任何数字,并且A看作1,J为11,Q为12,K为13。
//上面的5张牌就可以变成“1,2,3,4,5”(大小王分别看作2和4),“So Lucky!”。LL决定去买体育彩票啦。
//现在,要求你使用这幅牌模拟上面的过程,然后告诉我们LL的运气如何， 如果牌能组成顺子就输出true，否则就输出false。为了方便起见,你可以认为大小王是0。


//思路：对输入数组排序，分为含有0和不含有0两种情况，然后再含有0的情况下，计算相邻数的差值，根据差值减去1，得到所缺的数的个数，并于所含0的数目比较
//     一个0一个坑，坑数大于0的个数，则为否，反之为是

function IsContinuous(numbers)
{
    // write code here
    
    if(numbers.length==0){
        return false
    }
    
    let min=Math.min.apply(this,numbers),wang=[],n=0
    numbers.sort();
    if(numbers.indexOf(0)>-1){
        
        for(let j=0;j<numbers.length;j++){
            if(numbers[j]===0){
                wang.push(0);
            }
            if(j<numbers.length-1){
                if((numbers[j+1]-numbers[j]>1)&&numbers[j]!=0){
                    n+=(numbers[j+1]-numbers[j]-1);
                }
                //如果有相同的牌不是且相同的牌不为0，不算顺子
                if((numbers[j+1]===numbers[j])&&numbers[j]!=0){
                    return false
                }
            }
        }
        
        if(n>wang.length){
            return false;
        }else{
            return true
        }

    }else{
        
       return shunZi(numbers)
    }
    
}

function shunZi(arr){
    for(let i=0;i<arr.length-1;i++){
            if((arr[i]+1)===arr[i+1]){
                continue
            }else{
                return false
            }
        }
    return true
}
