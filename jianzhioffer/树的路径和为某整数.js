//输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
//路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
//(注意: 在返回值的list中，数组长度大的数组靠前)

//思路：从根到叶遍历树，并将节点值累加，到叶子节点判读是否与整数相同，叶节点同时时递归的结束处

//这个题涉及到了js中数组的深拷贝，js函数参数的值传递，以及在合适的递归结束处弹出栈顶元素等知识点，很不错的一道题

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
    let arr=[],res=[];
    travelTree(root,arr,expectNumber,res);
    asc(res);
    return res;
    
}

function travelTree(root,arr,expectNumber,res){
    
    if(!root){
        
        return true;
    }
    
    arr.push(root.val)
    if(!root.left&&!root.right){
        let sum=0;
        for(let i=0;i<arr.length;i++){
            sum+=arr[i];
        }
        
        if(sum===expectNumber){
            //数组的深拷贝，否则会在pop时res中的元素也变化
            let arr2=arr.slice(0)
            res.push(arr2);
            arr.pop();
            //结束递归
            return true;
        }else{
            arr.pop();
            return false;
        }
    }else{

           travelTree(root.left,arr,expectNumber,res);
            travelTree(root.right,arr,expectNumber,res); 
            arr.pop();
    }
}

function asc(list){
    let exc;
    for(let i=0;i<list.length-1;i++){
        for(let j=i+1;j<list.length;j++){
                if(list[i].length<list[j].length){
                exc=list[i];
                list[i]=list[j];
                list[j]=exc;
            }
        }
        
    }
}
