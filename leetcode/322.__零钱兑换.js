/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let f=[], cost;    
    f[0] = 0;
    //测试用例[1,2,5]，amoun=11，输出最小硬币数数组
    // for(let i = 1; i <= amount; i++){
    //     cost = Number.MAX_VALUE;
    //     if(i - 1 >=0) cost = Math.min(cost, f[i-1] + 1);
    //     if(i - 2 >=0) cost = Math.min(cost, f[i-2] + 1);
    //     if(i - 5 >=0) cost = Math.min(cost, f[i-5] + 1);
    //     f[i]=cost;
    // }
    // console.log(f)
    // f=[],f[0]=0
  
    for(let i=1;i<=amount;i++){
        cost =Number.MAX_VALUE
        for(let j=0;j<coins.length;j++){
            if(i-coins[j]>=0){
                //  console.log(cost,coins[j])
                if(f[i-coins[j]] != Number.MAX_VALUE){               
                    cost=Math.min(cost,f[i-coins[j]]+1)
                } 
            } 
        }
        f[i]=cost
    }
   return f[amount]===Number.MAX_VALUE?-1:f[amount]

   
   
};
