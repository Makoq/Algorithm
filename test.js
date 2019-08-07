/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let res=[],ori=['(',')']
    
    if(n<=0){
       return []
       }
    else if(n===1){
            return ori
        }
    else return fc(n,res,ori)
    
};

function fc(n,res,ori){
    
    if(n===1){
        console.log(res)
        // return res
    }else{
        
        
    }
}


generateParenthesis(2)

