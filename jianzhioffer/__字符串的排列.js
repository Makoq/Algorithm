//输入一个字符串,按字典序打印出该字符串中字符的所有排列。
//例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。

//挺难的
 var result = [];
function Permutation(str){
    result = []
    if(str.length<=0) return result;
    var sortTmp = "";
    var arr = str.split("");
    result = sortString(arr,sortTmp)
    return result;
}
 
function sortString(arr,sortTmp){
    if(arr.length ==0 ){
        result.push(sortTmp);
    }else{
        var isRepeated = {}
        for(var i = 0; i<arr.length; i++){
            if(!isRepeated[arr[i]]){
                var p = arr.splice(i,1)[0];
                sortTmp += p;
                sortString(arr,sortTmp);
                arr.splice(i,0,p); //恢复字符串
                sortTmp = sortTmp.slice(0,sortTmp.length-1);
                isRepeated[p] = true;
            }
        }
    }
    return result;
}
