//Design a stack that supports getMin() in O(1) time and O(1) extra space
//Hard
/*
Question: Design a Data Structure SpecialStack that supports all the stack operations like push(), pop(), isEmpty(), isFull() and an additional operation getMin() which should return minimum element from the SpecialStack. All these operations of SpecialStack must be O(1). To implement SpecialStack, you should only use standard Stack data structure and no other data structure like arrays, list, .. etc.
*/
{
    // t : O(1)
    // s : O(1)
    class Stack {

        constructor() {
            this.stack = [];
            this.minValue = Infinity;
        }

        getMin() {
            return this.minValue;
        }

        pop() {

            let t = this.stack.pop();
            if (t < this.minValue) {
                this.minValue = 2 * this.minValue - t;
            }
            return t;
        }

        push(val) {
            if (this.stack.length === 0) {
                this.minValue = val;
                this.stack.push(val);
            }

            if (val < this.minValue) {
                this.stack.push(2 * val - this.minValue);
                this.minValue = val;
            } else {
                this.stack.push(val);
            }
        }

        peek() {
            if (this.stack.length === 0) {
                return "Nothing"
            } else {
                return this.stack[this.stack.length - 1];
            }
        }
    }

    var s = new Stack();
    console.log('s.push(3)', s.push(3), 's=', s);
    console.log('s.push(5)', s.push(5), 's=', s);
    console.log('s.getMin()', s.getMin(), 's=', s);
    console.log('s.push(2)', s.push(2), 's=', s);
    console.log('s.push(1)', s.push(1), 's=', s);
    console.log('s.getMin()', s.getMin(), 's=', s);
    console.log('s.pop()', s.pop(), 's=', s);
    console.log('s.getMin()', s.getMin(), 's=', s);
    console.log('s.pop()', s.pop(), 's=', s);
    console.log('s.peek()', s.peek(), 's=', s);
}
/*
https://www.geeksforgeeks.org/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/


How does this approach work?
When element to be inserted is less than minEle, we insert “2x – minEle”. The important thing to notes is, 2x – minEle will always be less than x (proved below), i.e., new minEle and while popping out this element we will see that something unusual has happened as the popped element is less than the minEle. So we will be updating minEle.
*/