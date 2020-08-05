// https://adrianmejia.com/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/
//how to search big data if you save data in [] ?
// Only a hash table with a perfect hash function will have a worst-case runtime of O(1). 
//The ideal hash function is not practical, so there will be some collisions and workarounds that leads to a worst-case runtime of O(n). Still, on average, the lookup time is O(1).

// get, set, delete, get,
// use [] to save the {key : value} , convert key to be index (number) with hash function, lose lose, djb2
// http://www.cse.yorku.ca/~oz/hash.html
// charCodeAt() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
// 1 how to save it
// 2 how to get it
/*
[
    { '1': 'one' },
    { two: 2 },
    { '3rd': 'Third' }
]
*/
class HashTable {
    #table; //private
    constructor() {
        this.#table = [];
    }
    loseLoseHash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key[i].charCodeAt();
            // NOT key[i].charCodeAt(i), should  key.charCodeAt(i)
            // hash += key.charCodeAt(i); 
            // console.log('ki=', key[i], 'code=', key.charCodeAt(i))
        }
        return hash % 37;
    }
    getHash(key) {
        return this.loseLoseHash(key);
    }
    put(key, value) {
        let position = this.getHash(key);
        this.#table[position] = value;
    }
    getItems() {
        return this.#table;
    }
    get(key) {

    }
    remove() {

    }
}

let hashTable = new HashTable();
hashTable.put("111", "one");
hashTable.put("2", "two");
hashTable.put("third", "3");
console.log(hashTable.getItems());

class Dictionary {
    #items
    constructor() {
        this.#items = {}
    }
    has(key) {
        //return this.#items[key];
        // return this.#items.hasOwnProperty(key);
        return key in this.#items;
    }
    set(key, value) { // key conflict
        //return this.#item.has(key) ? undefined : this.#items[key] = value;
        this.#items[key] = value;
    }
    delete(key) {
        if (this.has(key)) {
            delete this.#items[key];
            return true;
        }
        return false;
    }
    get(key) {
        return this.has(key) ? this.#items[key] : undefined;
    }
    getItems() {
        return this.#items;
    }
    keys() {
        return Object.keys(this.#items);
    }
    values() {
        return Object.values(this.#items)
    }
};
/*
{


    let dic = new Dictionary();
    dic.set("1", "one");
    dic.set("two", 2);
    dic.set("3rd", "Third");
    console.log('dic = ', dic.getItems());
    console.log('delete = ', dic.delete('1'));
    console.log('has = ', dic.has('1'));
    console.log('get = ', dic.get('two'));
    console.log('dic = ', dic.getItems());
}
*/