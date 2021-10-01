//Reverse a stack using recursion
/*
Write a program to reverse a stack using recursion. You are not allowed to use loop constructs like while, for..etc, and you can only use the following ADT functions on Stack S:
isEmpty(S)
push(S)
pop(S)
*/
//The idea of the solution is to hold all values in Function Call Stack until the stack becomes empty. When the stack becomes empty, insert all held items one by one at the bottom of the stack. 

{
    class stack {
        constructor() {
            this.stack = [];
        
        }
        push(val) {
            this.stack.push(val)
        }
        reverse() {
            //recursive

            
        }
    }
}