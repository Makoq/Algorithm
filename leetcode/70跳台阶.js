/**这是非递归的写法，其实还有递归的写法，但是递归的写法在数值较大时，会在时间复杂度方面超过时间限制
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n===1){
        return 1
    }
    if(n<1){
        return 0
    }
    if(n===2){
        return 2
    }
    let tmp1=1,tmp2=2
    for(let i=3;i<=n;i++){
        let p=tmp2
        
        tmp2=tmp1+tmp2;
        tmp1=p;
    }
    return tmp2;

};