//在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
//并返回它的位置, 如果没有则返回 -1（需要区分大小写）.


//思路：遍历每一个元素，截取该位置后的子数组，判断子数组中是否还有该元素，如果有则装入一个另外的数组，
//      这个数组中的所有元素都是出现次数不止一次的元素
//      如果某元素后的子元素不再含有本元素，并且装有出现次数超过两次的元素的数组里没有本元素时，即为第一个出现一次的元素

function FirstNotRepeatingChar(str)
{
    // write code here
    let arr=Array.from(str),flag=[];
    if(str=="")return -1
    for(let i=0;i<arr.length;i++){
        if(arr.slice(i+1,arr.length).indexOf(arr[i])>-1 ){
            flag.push(arr[i])
        }else if(flag.indexOf(arr[i])==-1&&arr.slice(i+1,arr.length).indexOf(arr[i])==-1){
            return i
        }
       
    }
    
  
}
