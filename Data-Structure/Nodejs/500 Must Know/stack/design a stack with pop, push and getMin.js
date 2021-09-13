//design a stack with function pop, push and getMin

// two stacks, first stack is saving current item, second stack is keeping the min info
{

    class Stack {

        constructor() {
            this.stack = [];
            this.minStack = [];
        }

        push(val) {
            this.stack.push(val)
            if (this.minStack.length === 0) {
                this.minStack.push(val);
            } else {
                let minVal = this.getMin();
                if (val <= minVal) {
                    this.minStack.push(val);
                } else {
                    this.minStack.push(minVal);
                }
            }
        }

        pop() {
            if (this.stack.length > 0) {
                this.minStack.pop();
                return this.stack.pop();
            } else return `stack is empty`;
        }

        getMin() {
            let len = this.minStack.length;
            if (this.stack.length > 0) {
                return this.minStack[len - 1];
            } else {
                return `stack is empty`;
            }
        }
    }

    let sk = new Stack();

    console.log('getMin', sk.getMin());
    sk.push(4);
    console.log('pop', sk.pop());
    sk.push(6);
    sk.push(1);
    sk.push(2);
    sk.push(3);
    sk.push(0);

    console.log('getMin', sk.getMin());
    console.log('pop', sk.pop());
    console.log('getMin', sk.getMin());
    console.log('pop', sk.pop());
    console.log('getMin', sk.getMin());
}