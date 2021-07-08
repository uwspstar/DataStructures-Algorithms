//146. LRU Cache
/*
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
缓存淘汰算法 : http://ponder.work/2021/06/20/lru-cache/

Implement the LRUCache class:
Least Recently used(LRU) 是最常用的缓存淘汰算法，一般译为“最近最少使用”，不太贴切，其实应该是“最不是最近使用”，也就是将最近一次访问时间最远的数据淘汰掉

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
*/
{
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
            // *** very important ***, to keep the most recently used as a new key into map iterated
            let val = this.map.get(key);
            this.map.delete(key); // remove the key pair
            this.map.set(key, val); // the new entry will be the most recently used
            return val;
        }
        return -1;
    };

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys  

    LRUCache.prototype.put = function (key, value) {

        if (this.map.has(key)) {
            this.map.delete(key);
        } else if (this.map.size === this.capacity) { //before add new key, check the capacity
            // Map cannot be sorted, the order will be the order when the key added
            let key1 = this.map.keys().next().value; // the earliest added
            this.map.delete(key1);
        }

        this.map.set(key, value);
    };

    //LFU Cache
    //Design In-Memory File System
    //Design Compressed String Iterator
    //Design Most Recently Used Queue
}
{
    const map1 = new Map();
    map1.set('0', 'foo');
    map1.set(1, 'bar');
    const iterator1 = map1.keys();
    console.log(iterator1.next().value);
    // expected output: "0"
    console.log(iterator1.next().value);
    // expected output: 1
}
{
    //Using keys()
    var myMap = new Map();
    myMap.set('0', 'foo');
    myMap.set(1, 'bar');
    myMap.set({}, 'baz');

    var mapIter = myMap.keys();

    console.log(mapIter.next().value); // "0"
    console.log(mapIter.next().value); // 1
    console.log(mapIter.next().value); // Object
}