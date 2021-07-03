//1209. Remove All Adjacent Duplicates in String II
/*
You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

 

Example 1: Input: s = "abcd", k = 2 Output: "abcd"
Explanation: There's nothing to delete.

Example 2:
Input: s = "deeedbbcccbdaa", k = 3 Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"

Example 3: Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"
*/
{
    var removeDuplicates = function (s, k) {
        if (s.length < k) return s;
        let stack = [];
        let count = [];
        for (let i = 0; i < s.length; i++) {
            if (i === 0 || stack[stack.length - 1] !== s[i]) {
                stack.push(s[i]);
                count.push(1);
            } else {
                if (count[count.length - 1] === k - 1) {
                    let num = count.pop();
                    while (num) {
                        stack.pop();
                        num--;
                    }
                } else {
                    stack.push(s[i]);
                    count[count.length - 1]++;
                }
            }
        }

        return stack.join("");
    };
}
{
    //Output Limit Exceeded
    var removeDuplicates = function (s, k) {
        let stack = [];
        for (let c of s) {
            console.log('stack.length=', stack.length);
            if (stack.length < k - 1) {
                stack.push(c);
                console.log('here ....');
            } else {
                let tmp = [];
                console.log('stack1=', stack);
                let i = k - 1;
                for (; i >= 0; i--) {
                    if (stack[stack.length - 1] !== c) {
                        break;
                    } else {
                        tmp.push(stack.pop());
                    }
                }
                console.log('c=', c, 'i=', i, 'stack=', stack, 'tmp=', tmp)
                if (i !== 0) {
                    stack.push(...tmp);
                    stack.push(c);
                }
                console.log('stack2=', stack)
            }
        }
        return stack.join('');
    };
}
{
    var removeDuplicates = function (s, k) {
        let res = new Array(s.length);
        let duplicateCountStack = [];
        let i = 0;
        let duplicateCount = 1;

        for (let j = 0; j < s.length; j++) {
            res[i] = s[j];
            if (s[j] === res[i - 1]) {
                duplicateCount++;
            } else {
                duplicateCountStack.push(duplicateCount);
                duplicateCount = 1;
            }
            if (duplicateCount === k) {
                i -= k;
                duplicateCount = duplicateCountStack.pop();
            }
            i++;
        }
        return res.slice(0, i).join("");
    };
    //Largest Rectangle in Histogram
    //Complex Number Multiplication
    //Find K-Length Substrings With No Repeated Characters
}
{
    //1 <= s.length <= 105
    //2 <= k <= 104
    var removeDuplicates = function (s, k) {
        let count = [];
        let arr = s.split('');
        for (let i = 0; i < arr.length; i++) {
            if (i === 0 || arr[i] != arr[i - 1]) {
                count.push(1)
            } else {
                let val = count.pop() + 1;
                if (val === k) {
                    //console.log('arr1=',arr);
                    arr.splice(i - k + 1, k);
                    //console.log('arr2=',arr);
                    i = i - k;
                } else {
                    count.push(val);
                }
            }
        }
        return arr.join('');
    };
}