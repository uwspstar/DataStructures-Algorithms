//https://brilliant.org/practice/recursive-functions/?p=3
//Write a recursive algorithm that outputs the sum of the numbers on each line. For example the sum of the numbers on the 3rd line is 1+2+1=4 . What is the sum of the numbers on the 2323rd line?

const PascalTriangle = n => {
    if (n === 1) return 1;
    else {
        let pre = PascalTriangle(n - 1);
        let line = [];
        for (let i = 0; i < pre.length - 1; i++) {
            line.push(pre[i] + pre[i + 1]);
        }
        line.unshift(1);
        line.push(1);
        return line;
    }
}
let arr = PascalTriangle(23);
let sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);

/*
if (n === 1) return 1;
if (n === 2) return 1 +  1;
if (n === 3) return 1 + (2) +  1;
if (n === 4) return 1 + (3) + (3)    + 1;
if (n === 5) return 1 + (4) + (3+3)  + (4)     + 1;
if (n === 6) return 1 + (5) + (4+6)  + (4+6)   + (5) + 1;
if (n === 7) return 1 + (6) + (5+10) + (10+10) + (5+10) + (6) + 1;
...
if (n === k) return 1 + (k -1) + (k-2 +
*/