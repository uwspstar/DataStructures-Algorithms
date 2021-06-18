//432. All O`one Data Structure
/*
Design a data structure to store the strings' count with the ability to return the strings with minimum and maximum counts.

Implement the AllOne class:

AllOne() Initializes the object of the data structure.
inc(String key) Increments the count of the string key by 1. If key does not exist in the data structure, insert it with count 1.
dec(String key) Decrements the count of the string key by 1. If the count of key is 0 after the decrement, remove it from the data structure. It is guaranteed that key exists in the data structure before the decrement.
getMaxKey() Returns one of the keys with the maximal count. If no element exists, return an empty string "".
getMinKey() Returns one of the keys with the minimum count. If no element exists, return an empty string "".
 

Example 1:

Input
["AllOne", "inc", "inc", "getMaxKey", "getMinKey", "inc", "getMaxKey", "getMinKey"]
[[], ["hello"], ["hello"], [], [], ["leet"], [], []]
Output
[null, null, null, "hello", "hello", null, "hello", "leet"]

Explanation
AllOne allOne = new AllOne();
allOne.inc("hello");
allOne.inc("hello");
allOne.getMaxKey(); // return "hello"
allOne.getMinKey(); // return "hello"
allOne.inc("leet");
allOne.getMaxKey(); // return "hello"
allOne.getMinKey(); // return "leet"


["AllOne","inc","inc","getMaxKey","getMinKey","inc","getMaxKey","getMinKey"]
[[],["hello"],["hello"],[],[],["leet"],[],[]]

["AllOne","getMaxKey","getMinKey"]
[[],[],[]]

["AllOne","inc","inc","inc","inc","inc","inc","dec", "dec","getMinKey","dec","getMaxKey","getMinKey"]
[[],["a"],["b"],["b"],["c"],["c"],["c"],["b"],["b"],[],["a"],[],[]]
*/
/*
["AllOne","inc","inc","inc","inc","inc","inc","dec", "dec","getMinKey","dec","getMaxKey","getMinKey"]
[[],      ["a"],["b"],["b"],["c"],["c"],["c"],["b"], ["b"],      [],    ["a"],[],           []]
--a0
--b0
c3
[null,null,null,null,null,null,null,null,null,"a",null,"c","c"]
*/
{
    /**
 * Initialize your data structure here.
 */
    //["AllOne","getMaxKey","getMinKey"]
    //[[],[],[]]
    var AllOne = function () {
        this.map = new Map();
    };

    /**
     * Inserts a new key <Key> with value 1. Or increments an existing key by 1. 
     * @param {string} key
     * @return {void}
     */
    AllOne.prototype.inc = function (key) {
        if (this.map.has(key)) {
            let value = this.map.get(key);
            this.map.set(key, value + 1)
        } else this.map.set(key, 1);
        //console.log(this.map);
    };

    /**
     * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
     * @param {string} key
     * @return {void}
     */
    AllOne.prototype.dec = function (key) {
        if (this.map.has(key)) {
            let value = this.map.get(key) - 1;
            if (value > 0) {
                this.map.set(key, value);
            } else {
                this.map.delete(key);
            }
        }
        //console.log(this.map);
    };

    /**
     * Returns one of the keys with maximal value.
     * @return {string}
     
     for (const [key, value] of myMap.entries()) {
      console.log(key, value);
    }
    
     */
    AllOne.prototype.getMaxKey = function () {
        //console.log(this.map);
        let maxVal = Math.max(...this.map.values());
        for (let [key, value] of this.map.entries()) {
            if (value === maxVal) return key;
        }
        return "";
    };

    /**
     * Returns one of the keys with Minimal value.
     * @return {string}
     */
    AllOne.prototype.getMinKey = function () {
        //console.log(this.map);
        let maxVal = Math.min(...this.map.values());
        for (let [key, value] of this.map.entries()) {
            if (value === maxVal) return key;
        }
        return "";
    };

    //Binary Search Tree Iterator
    //Zigzag Iterator
    //Design a File Sharing System
}