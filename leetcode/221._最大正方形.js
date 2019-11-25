/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    
    let max=0
    //只有一个值的情况
    if(matrix.length===1){
        for(let i=0;i<matrix[0].length;i++){
            if(matrix[0][i]==='1') return 1
        }
        return 0
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
              if(matrix[i][j]==='0'){
                  continue;
              }else{ 
                  
                    let sqlen = 1;
                    let flag = true;
                   //从边长为1开始，检查最外边是否全为1，逻辑很简单
                    while (sqlen + i < matrix.length && sqlen + j < matrix[0].length && flag) {
                        //最下边行遍历
                        for (let k = j; k <= sqlen + j; k++) {
                            if (matrix[i + sqlen][k] == '0') {
                                flag = false;
                                break;
                            }
                        }
                        //最右边列遍历
                        for (let k = i; k <= sqlen + i; k++) {
                            if (matrix[k][j + sqlen] == '0') {
                                flag = false;
                                break;
                            }
                        }
                        //如果最外边全为一，则增加边长，继续遍历最外边是否全为1
                        if (flag)
                            sqlen++;
                    }


                    if (max < sqlen) {
                        max = sqlen;
                    }
              }
        }
    }
    return max*max

};
