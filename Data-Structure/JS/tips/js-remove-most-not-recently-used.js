/**
 * @param {number} capacity
 */

// Map is perfect data structure for key value
// to keep the most recently, 1) delete, then, 2) add

var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = new Map(); // Map is perfect data structure for key value
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {

    if (this.map.has(key)) {
        // *** very important ***, to keeo the most rececently used as a new key into map iterated
        let val = this.map.get(key);
        this.map.delete(key); // remove the key pair
        this.map.set(key, val); // the new entry will be the most recently used
        return val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys  
LRUCache.prototype.put = function (key, value) {

    if (this.map.has(key)) {
        this.map.delete(key);
    } else if (this.map.size === this.capacity) { //before add new key, check the capacity
        // Map cannot be sorted, the order will be the order when the key added
        let key1 = this.map.keys().next().value; // the earlest added
        this.map.delete(key1);
    }

    this.map.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */