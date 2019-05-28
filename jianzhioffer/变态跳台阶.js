function jumpFloorII(number)
{
    if(number===1){
        return 1;
    }else if(number===2){
        return 2;
    }else{
        let sum=1;
        for(let i=number-1;i>0;i--){
            sum+=jumpFloorII(i)
        }
            return sum;
    }
}