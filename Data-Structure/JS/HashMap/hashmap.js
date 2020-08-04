// use {} to save the {key : value} has, get, set, delete, get,
// 1 how to save it
// 2 how to get it

class HashMap {
    #result
    constructor() {
        this.#result = {}
    }
    has(key) {
        //return this.#result[key];
        return this.#result.hasOwnProperty(key)
    }
}