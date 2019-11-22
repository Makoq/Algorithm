/**
 * 这里利用js对象属性，还有树的递归遍历及创捷节点.
 */
var Trie = function() {
    this.next={}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {

    return re_create(this.next,word)
     
};

function re_create(obj,str){

    if(str.length>0){

        if(!obj.hasOwnProperty(str[0])){
            obj[str[0]]={}
        }
        re_create(obj[str[0]],str.slice(1))

    }else{
        obj['*']={}
    }
}

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return re_search(this.next,word)
};

function re_search(obj,str){
    if(str.length===0){
       
        if(!obj.hasOwnProperty("*"))
            return false
         
        return true
    } 

    if(obj.hasOwnProperty(str[0])){
        if(re_search(obj[str[0]],str.slice(1))){
            return true
        }else return false
    }else{
        return false
    }

}

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return re_start(this.next,prefix)
    
};
function re_start(obj,str){
    if(str.length===0) return true
    if(obj.hasOwnProperty(str[0])){
        if(re_start(obj[str[0]],str.slice(1))){
            return true
        }else return false
    }else{
        return false
    }
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */