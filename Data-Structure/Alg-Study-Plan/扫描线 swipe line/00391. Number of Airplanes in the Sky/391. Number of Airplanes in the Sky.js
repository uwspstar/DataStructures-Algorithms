//391. Number of Airplanes in the Sky
/*
Given an list interval, which are taking off and landing time of the flight. How many airplanes are there at most at the same time in the sky?

Example 1:
Input: [(1, 10), (2, 3), (5, 8), (4, 7)]
Output: 3
Explanation:
The first airplane takes off at 1 and lands at 10.
The second airplane takes off at 2 and lands at 3.
The third airplane takes off at 5 and lands at 8.
The forth airplane takes off at 4 and lands at 7.
During 5 to 6, there are three airplanes in the sky.

Example 2:
Input: [(1, 2), (2, 3), (3, 4)]
Output: 1
Explanation: Landing happen before taking off.
*/
//sweep line
const countOfAirplanes = airplanes => {
    let list = [];
    let N = airplanes.length;
    for (let i = 0; i < N; i++) {
        list.push([airplanes[i][0], 1]);
        list.push([airplanes[i][1], -1]);
    }

    console.log('list=', list);

    list.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });

    let count = 0;
    let res = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i][1] === 1) count++;
        else count--;
        res = Math.max(res, count);
    }

    return res;

}

console.log(countOfAirplanes([[1,4], [2,6],[3,7],[4,5]]));