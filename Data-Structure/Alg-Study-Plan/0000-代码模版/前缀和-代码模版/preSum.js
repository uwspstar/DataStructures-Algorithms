// preSum 代码模版
let arr = [1, 2, 3, 4, 5]
let N = arr.length;

let preSum = new Array(N + 1).fill(0); // N + 1 = 6
for (let i = 1; i < N + 1; i++) { // start from 1
    preSum[i] = preSum[i - 1] + arr[i - 1];
}

console.log('preSum=', preSum);// preSum= [ 0, 1, 3, 6, 10, 15 ]