// 391 · Number of Airplanes in the Sky
/*
Given an list interval, which are taking off and landing time of the flight. How many airplanes are there at most at the same time in the sky?

Input: [(1, 10), (2, 3), (5, 8), (4, 7)]
Output: 3
Explanation:
The first airplane takes off at 1 and lands at 10.
The second airplane takes off at 2 and lands at 3.
The third airplane takes off at 5 and lands at 8.
The forth airplane takes off at 4 and lands at 7.
During 5 to 6, there are three airplanes in the sky.

*/

const countOfAirplanes = arr => {
    let N = arr.length;
    if (N === 0) return 0;
    let ans = 0;
    let cnt = 0;
 
    let list = [];

    for (let a of arr) {
        list.push([a[0], 1]);
        list.push([a[1], -1]);
    }

    list.sort((a, b) => a[0] - b[0]);
    console.log(list.join('|'));

    for (let p of list) {
        if (p[1] === 1) {
            cnt++;
            ans = Math.max(ans, cnt);
        } else cnt--;

    }
    return ans;
}

let arr = [[1, 10], [2, 3], [5, 8], [4, 7]];
let arr2 = [[1, 4], [2, 6], [3, 7], [4, 5]];
console.log(countOfAirplanes(arr));
console.log(countOfAirplanes(arr2));
