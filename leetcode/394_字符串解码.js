/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let num=[],w=[],flag=-1
    for(let i=0;i<s.length;i++){
        if(s[i]>='0'&&s[i]<='9'){
          
            num.push(s[i])
             
        }else{
            
            if(s[i]==='['){

                let ns=''
                for(let v=flag+1;v<num.length;v++){
                    ns+=num[v]
                }
                 
                num.splice(flag+1,num.length)
                num.push(ns)
                // console.log('*',ns,num)
                w.push(s[i])
                flag++
                continue
            }else if(s[i]===']'){

                let top=w.pop(),sr='',s=[]
                while(top!='['){
                    s.unshift(top)
                    top=w.pop()
                }
                let n=Number(num.pop()),s2=s.join("")
                for(let k=1;k<=n;k++){
                    sr+=s2
                }
                // console.log('-',sr)
                w.push(sr)
                flag=num.length-1

            }else{

                w.push(s[i])
                // flag=num.length-1
            }
        }
    }
    return w.join("")
    

};