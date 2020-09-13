// key, value
// if key is unique , one key one value;
// #variable private variable ES6

class Dictionary {
    #items; //private
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
            delete this.#items[key]; // delete obj key
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
}

let dic = new Dictionary();
dic.set("1", "one");
dic.set("two", 2);
dic.set("3rd", "Third");
console.log('dic = ', dic.getItems());
console.log('keys = ', dic.keys());
console.log('values = ', dic.values());
console.log('delete = ', dic.delete('1'));
console.log('has = ', dic.has('1'));
console.log('get = ', dic.get('two'));
console.log('dic = ', dic.getItems());
