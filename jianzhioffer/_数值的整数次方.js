//给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
function Power(base, exponent)
{
    let re=base;
    
    if(exponent>0){
        if(exponent==1){
        return re;
    }
        while(exponent>1){
            re=re*base;
            exponent-=1;
        }
        
    }else if(exponent==0){
        return 1;
    }else if(exponent<0){
        re=1.0/base
        base=1.0/base
        exponent=-exponent
         while(exponent>1){
            re=re*base;
            exponent-=1;
        }
    }
    
    return re;
}
