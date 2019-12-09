/**
 * 34/36
 * 还是时间效率不够
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    
    let len=p.length,pp=[...p].sort()
    let arr=[]
    for(let i=0;i<s.length-len+1;i++){
        if(p.indexOf(s[i])<0){
            continue;
        }
        let sr=Array.prototype.slice.apply(s.substring(i,i+len))
        
        let st=sr.sort()
        if(eq(st,pp)) {
            arr.push(i)
        }
    }
    return arr

};
function eq(a1,a2){
    if((a1.join())===a2.join()){
        return true
    }else return false
}