/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity=capacity
    this.cache=[]
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let el
    for(let i=0;i<this.cache.length;i++){
        if(this.cache[i].key===key){
            //当键值存在时，将键值移到栈顶
            var tail=this.cache.splice(i,1)
            this.cache.push(tail[0])
            
            return tail[0].val 
        }
    }

    return -1
 
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
        var ca={
            'key':key,
            'val':value,
        }
        //当缓存中存在键值时，更新键值，并将键值放在栈顶
        for(let i=0;i<this.cache.length;i++){
            if(this.cache[i]['key']===key){
                this.cache[i]=ca
                let el=this.cache.splice(i,1)
                this.cache.push(el[0])
 
                return null
            }
        }
        //此时为缓存中没有键值
        if(this.cache.length<this.capacity){
            //当缓存未满时直接入
            this.cache.push(ca)
            
        }else{
            //当缓存满了，去掉栈底元素，将新元素放在栈顶
            this.cache.shift()
            this.cache.push(ca)
        }
   
        
    }
    

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */