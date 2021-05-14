//391 · Number of Airplanes in the Sky
/*
Description
Given an list interval, which are taking off and landing time of the flight. How many airplanes are there at most at the same time in the sky?

If landing and taking off of different planes happen at the same time, we consider landing should happen at first.

Example
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
{
    const countOfAirplanes = arr => {
        // write your code here
        //[[1, 10], [2, 3], [5, 8], [4, 7]]
        let maxNum = 0; // history, overall max
        let currMax = 0; // same like the buy stack, need current Max in this moment
        let arrInterval = []
        for (let i = 0; i < arr.length; i++) {
            arrInterval.push([arr[i][0], 1]);
            arrInterval.push([arr[i][1], -1]);
        }
        // sort by start time, 
        // check with interviewer, if the start time same, sort landing before start
        arrInterval.sort((a, b) => {
            /*if (a[0] === b[0]) {
                return a[1] - b[1];
            }*/
            return a[0] - b[0];
        });

        console.log('arrInterval = ', arrInterval);

        for (let i = 0; i < arrInterval.length; i++) {
            currMax = currMax + arrInterval[i][1];
            maxNum = Math.max(maxNum, currMax);
        }
        return maxNum;
    }
}