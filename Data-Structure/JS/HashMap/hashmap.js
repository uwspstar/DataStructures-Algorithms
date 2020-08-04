// how to search big data if you save data in [] ?
// use {} to save the {key : value} has, get, set, delete, get,
// 1 how to save it
// 2 how to get it


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
            delete this.#item[key];
            return true;
        }
        return false;
    }
    get(key) {
        return this.has(key) ? this.#item[key] : undefined;
    }
}