//给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法

//思路：这表达式的意思是b[i]等于a中非i所有元素的乘积

function multiply(array)
{
    // write code here
    let b=[],k=0,em=1
    
    if(!array){
        return null
    }
    
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
           
            if(j!=i){
                em*=array[j];
            }
            
        }
        b[i]=em; 
        em=1;
    }
    return b
}
