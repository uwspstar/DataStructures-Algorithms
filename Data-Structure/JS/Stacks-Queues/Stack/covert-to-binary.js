// use stack concept 10 -> binary (8-4-2-1)
/* 10 -> 1010  
10 / 2 = 5 ,  0
5 / 2 = 2  ,  1
2 / 2 = 1  ,  0
1 / 2 = 0  ,  1

0b1 0 1 0 =  8 * 1 + 0 * 4 + 1 * 2 + 0 * 1 = 10
  8 4 2 1
*/
class Stack {
    #result;
    constructor() {
        this.#result = [];
    }
    push(data) {
        return this.#result.push(data);
    }
    pop() {
        return this.#result.pop()
    }

    isEmpty() {
        return this.#result.length === 0;
    }

    getItem() {
        return this.#result;
    }
}
const coverToBinary = function (num) {
    let str = '';
    let stack = new Stack();
    while (num > 0) {
        let mod = num % 2; 
        stack.push(mod)
        num = num >> 1;
    }
    while (!stack.isEmpty()) {
        str += stack.pop()
    }
    return str;

}

console.log(coverToBinary(10));