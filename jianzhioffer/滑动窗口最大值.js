//给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
//例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，
//他们的最大值分别为{4,4,6,6,6,5}； 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个：
//{[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。


//思路：简单
function maxInWindows(num, size)
{
    // write code here
    let arr=[],len=num.length,tep=[]
    
    if(len===0||size>len||size===0){
        return []
    }
    for(var i=0;i<size;i++){
        tep.push(num[i])
    }
    
    while(i<len+1){
        
        arr.push(maxOfThree(tep))
        tep.shift()
        tep.push(num[i++])
        
    }

    return arr
}

function maxOfThree(arr){
  let a=arr[0]
  for(let i=0;i<arr.length;i++){
      if(a<arr[i]){
          a=arr[i]
      }
  }
  return a
}
