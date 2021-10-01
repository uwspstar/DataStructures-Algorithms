//use two stacks to make a queue with function enqueue(), dequeue(), peek()
{
    class twoStacksToQueue {
        constructor() {
            this.stackPush = [];
            this.stackPop = [];
        }

        enqueue(val) {
            this.stackPush.push(val);
        }

        dequeue() {
            // 1 : make sure stackPop which has val
            if (this.stackPop.length > 0) {
                return this.stackPop.pop();
            }
            // 2 : if stackPop has not val, make sure stackPush which has val
            if (this.stackPush.length === 0) return `Queue is empty`;

            this.moveItemFromOneStackToAnotherStack(this.stackPush, this.stackPop);
            return this.stackPop.pop();
        }

        peek() {
            // 1 : make sure stackPop which has val
            if (this.stackPop.length > 0) return this.stackPop[this.stackPop.length - 1];
            // 2 : if stackPop has not val, make sure stackPush which has val
            if (this.stackPush.length === 0) return `Queue is empty`;

            this.moveItemFromOneStackToAnotherStack(this.stackPush, this.stackPop);
            return this.stackPop[this.stackPop.length - 1];
        }

        moveItemFromOneStackToAnotherStack(fromStack, toStack) {
            while (fromStack.length) {
                toStack.push(fromStack.pop());
            }
            return toStack;
        }

    }

    let que = new twoStacksToQueue();
    console.log('dequeue', que.dequeue());
    console.log('peek', que.peek());
    que.enqueue(1);
    que.enqueue(2);
    que.enqueue(3);
    console.log('dequeue = 1', que.dequeue()); // 1
    que.enqueue(4);
    que.enqueue(5);
    console.log('peek', que.peek());//2
    console.log('dequeue', que.dequeue());//2
    console.log('dequeue = 3', que.dequeue());//3
    console.log('dequeue = 4', que.dequeue());//4
    console.log('dequeue = 5', que.dequeue());//5

}

/*
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_class_fields

class ClassWithPrivateField {
  #privateField
}

class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world'
 }
}

class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD
}
Copy to Clipboard

*/