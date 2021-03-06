//输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
//例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
//则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

//思路：每一圈起始坐标I,J分别乘以2均小于行列数是每一圈遍历的条件
//      遍历每一圈，分上下左右四个部分，以3x3矩阵为例，上：[0] [0，1，2];右：[1，2][2];下：[2][1,0];左：[1][0]
//      对于最后一步，打印左竖行，注意停止在起点的下一个点
//      其它圈类似，但注意最后一圈要考虑只有一行或只有一竖的情况，这就要遍历的时候，对于下和左，进行条件限制
//      限制条件是：当遍历右竖列时，其起点和终点坐标相同，证明此时为一行（或一点），而遍历下横行时，起点终点相同意味着为一竖列（或一点）
function printMatrix(matrix)
{
    // write code here
    if(!matrix){
        return false;
    }
    
    let row=matrix.length;
    let col=matrix[0].length;
    let start=0,arr=[]
    
    while(row>start*2&&col>start*2){
        circle(matrix,arr,start);
        start++
    }
  
    return arr
}

function circle(matrix,arr,start){
    let row=matrix.length,col=matrix[0].length;
    let topS=start,topE=col-start;
    //top
    for(let i=topS;i<topE;i++){
        arr.push(matrix[topS][i])
    }
    
    let rightS=start+1,rightE=row-start;
    //right
    for(let i=rightS;i<rightE;i++){
        arr.push(matrix[i][topE-1])
    }
    
    //bottom
    let bottomS=topE-2,bottomE=topS;
    for(let i=bottomS;i>=bottomE&&rightS!=rightE;i--){
        arr.push(matrix[rightE-1][i])
    }
    
    //left
    let leftS=rightE-2,leftE=start+1;
    for(let i=leftS;i>=leftE&&bottomS!=bottomE-1;i--){
        arr.push(matrix[i][topS])
    }
    
}

 
