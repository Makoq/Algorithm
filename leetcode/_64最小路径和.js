/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    
    if(grid.length===0||grid[0].length===0){return 0}
    let x_len=grid.length,y_len=grid[0].length

    for(let i=0;i<x_len;i++){
        for(let j=0;j<y_len;j++){
            if(i===0&&j===0) continue;
            if(i===0&&j<y_len){
               grid[i][j]=grid[i][j]+grid[i][j-1]
            }else if(j===0&&i<x_len){
                grid[i][j]=grid[i][j]+grid[i-1][j]
            }else {
                grid[i][j]=grid[i][j]+Math.min(grid[i][j-1],grid[i-1][j])     
            }
            
        }
    }
    
    return grid[x_len-1][y_len-1]
    
};

 