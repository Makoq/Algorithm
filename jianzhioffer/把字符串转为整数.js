//将一个字符串转换成一个整数(实现Integer.valueOf(string)的功能，但是string不符合数字要求时返回0)，要求不能使用字符串转换整数的库函数。 
//数值为0或者字符串不是一个合法的数值则返回0。

//思路：每位乘以10的位次方再相加，当位值出现0时跳过不计算，整体不难，就是处理一些边界条件比较麻烦


function StrToInt(str)
{
    // write code here
    if(!str){
        return 0;
    }
    
    let [...str2]=str,num=0;
    
    if(str2.length>1&&str2[1]===0){
        return 0;
    }
    
     
    for(let k=0;k<str2.length;k++){
        if(str2[k]!="+"&&str2[k]!="-"&&(str2[k]<'0'||str2[k]>'9')){
            return 0
        }
    }
    
    for(let i=str2.length-1,j=0;i>=0;i--,j++){
        if(i===0){
                if(str2[0]==="+"){
                num=num
            }else if(str2[0]==="-"){
                num=-num
            }else{
                 num+=str2[i]*Math.pow(10,j);
            }
        }else if(str2[i]!=0){
                    num+=str2[i]*Math.pow(10,j);
            }
    }
    return num
    
}
