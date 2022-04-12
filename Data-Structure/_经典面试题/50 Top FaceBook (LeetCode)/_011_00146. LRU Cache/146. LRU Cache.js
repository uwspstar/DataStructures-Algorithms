// 146. LRU Cache
{
    var LRUCache = function (cap) {
        this.cap = cap;
        this.map = new Map();
    };

    LRUCache.prototype.get = function (key) {
        if (!this.map.has(key)) return -1;
        let val = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, val);
        return val;
    };

    LRUCache.prototype.put = function (key, val) {
        if (this.map.has(key)) {
            this.map.delete(key); // need it 
        } else {
            if (this.map.size === this.cap) {
                let k1 = this.map.keys().next().value;
                this.map.delete(k1);
            }
        }
        this.map.set(key, val);
    };
    // LFU Cache (H)
    // Design Compressed String Iterator (E)
    // Design Most Recently Used Queue (M)
}