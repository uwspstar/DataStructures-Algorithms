/*
The keys in Map are ordered. 
Thus, when iterating over it, 
a Map object returns keys in order of insertion.
*/
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = new Map();
};

LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        let value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    } else return -1;
};

LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        this.map.delete(key); // need it
    } else if (this.map.size === this.capacity) {
        let key1 = this.map.keys().next().value; // the earliest added
        this.map.delete(key1);
    }
    this.map.set(key, value);
};