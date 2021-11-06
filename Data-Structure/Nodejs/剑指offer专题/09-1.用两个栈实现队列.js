// 面试题9：用两个栈实现队列
// 题目：用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 append
// 和 delete，分别完成在队列尾部插入结点和在队列头部删除结点的功能。
// 思路:一个栈压入元素，而另一个栈作为缓冲，将栈1的元素出栈后压入栈2中。也可以将栈1中的最后一个元素直接出栈，而不用压入栈2中再出栈。

{
    class Stack {
        constructor() {
            this.stack = [];

        }
        //getter : The get syntax binds an object property to a function that will be called when that property is looked up.
        get size() {
            return this.stack.length;
        }

        push(val) {
            return this.stack.push(val);
        }

        pop() {
            return this.stack.pop();
        }
    }

    class Queue {
        constructor() {
            this.stack = new Stack();
            this.reverseStack = new Stack();
        }
        get size() {
            return this.stack.size + this.reverseStack.size;
        }
        append(val) {
            this.stack.push(val);
        }
        delete() {
            if (this.reverseStack.size === 0) {
                while (this.stack.size) {
                    this.reverseStack.push(this.stack.pop());
                }
            }
            // two if has to be in order
            if (this.reverseStack.size) {
                return this.reverseStack.pop();
            }

            return null;
        }
    }
}