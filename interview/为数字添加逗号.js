//大疆面试，笔试题
//如何每隔三个数加一个逗号，还要考虑小数点的情况

 

function transform(number){
    var num = number.toString()
    var numArr = num.split('.')
    var [num, dotNum] = numArr
 
 
    var operateNum = num.split('').reverse()
    var result = [], len = operateNum.length
    for(var i = 0; i< len; i++){
         result.push(operateNum[i])
         if(((i+1) % 3 === 0) && (i !== len-1)){
              result.push(',')
        }
    }
 
    if(dotNum){
         result.reverse().push('.', ...dotNum)
         return result.join('')
    }else{
         return result.reverse().join('')
    }
 
}
//1234567.1232
//处理后是1,234,567.1232