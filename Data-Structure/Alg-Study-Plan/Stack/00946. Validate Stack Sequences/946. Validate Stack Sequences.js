// 946. Validate Stack Sequences
/*
Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

 

Example 1:

Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
*/
{
    var validateStackSequences = function (pushed, popped) {
        let N = pushed.length;
        let stack = [];
        let j = 0;
        for (let x of pushed) {
            stack.push(x);
            while (stack.length > 0 && j < N && stack[stack.length - 1] == popped[j]) {
                stack.pop();
                j++;
            }
        }
        return j === N;
    }
}
var validateStackSequences = function (pushed, popped) {
    let N = pushed.length;
    let stack = [];
    let j = 0;
    for (let x of pushed) {
        stack.push(x);
        while (stack.length > 0 && j < N && stack[stack.length - 1] == popped[j]) {
            stack.pop();
            j++;
        }
    }
    return j === N;
}
{
    var validateStackSequences = function (pushed, popped) {
        let stack = [];
        let i = 0, j = 0;
        for (; i < pushed.length && j < popped.length;) {
            if (stack.length === 0) {
                stack.push(pushed[i])
                i++;
            } else {
                if (stack[stack.length - 1] !== popped[j]) {
                    stack.push(pushed[i])
                    i++;
                }
                if (stack[stack.length - 1] === popped[j]) {
                    stack.pop();
                    j++;
                }
            }
        }
        // finish all push, still has not pop all yet
        while (j < popped.length && stack[stack.length - 1] === popped[j]) {
            stack.pop();
            j++;
        }
        return stack.length === 0;
    };
}
/*
Super Ugly Number
Maximum Number of Weeks for Which You Can Work
Simple Bank System
*/