function main(str){
 
    let re=[],con,list 

    for(let i=0;i<str.length;i++){
            con=(str.slice(str.length-1-i,str.length)).concat((str.slice(0,str.length-i-1)))
            list=con.match(/1+/g)
            if(list!=null){
               re=re.concat(list)
               
            }

       }

   console.log(Math.max(...(re.map((v)=>{
       return v.length
   }))))
}
 
var st="1"
// // var st=readline()
main(st)



// let str="010011"
// if(str.indexOf('0')===-1){
 
//     print(str.length)
 
// }else{
 
//     var newstr = str+str
 
//     var list = newstr.match(/1+/g)
 
//     if(list === null){
 
//         print(0)
 
//     }else{
 
//         list = list.map(x=>x.length)
 
//         console.log(Math.max(...list))
 
//     }
 
// }