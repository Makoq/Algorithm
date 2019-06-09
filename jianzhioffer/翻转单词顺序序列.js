//牛客最近来了一个新员工Fish，每天早晨总是会拿着一本英文杂志，写些句子在本子上。
//同事Cat对Fish写的内容颇感兴趣，有一天他向Fish借来翻看，但却读不懂它的意思。
//例如，“student. a am I”。后来才意识到，这家伙原来把句子单词的顺序翻转了，正确的句子应该是“I am a student.”。
//Cat对一一的翻转这些单词顺序可不在行，你能帮助他么？


//思路：注意单词输出结果首尾含有空格和输入权威空格的情况，大致思路就是先按单词为单位进行入队和出队操作
function ReverseSentence(str)
{
    // write code here
    if(str===" "){
        return str
    }
    if(!str||str===""){
        return ""
    }
    
    let flag=0;
    
    
    let [...arr]=str,s="",t=[]; 
    //判断是否全为空格，若是则原样返回
    arr.forEach((v)=>{if(v!=" "){flag=1}})
    if(flag===0){
        return str
    }
    while(arr.length>0){
        let d=arr.shift();
        if(d!=" "&&d!="."&&d!=","){
            s+=d;
            if(arr.length===0){
                t.unshift(s)
            }
        }else{
            if(d!=" "){
                t.unshift(s+d);
            }else{
                t.unshift(s);
            }
            if(arr.length!=0){
                t.unshift(" ")
            }
            

            s=""
        }
    }
   
    s="";
    t.forEach((v)=>{s+=v})

    return s.trim();

}
 
