// 1337. The K Weakest Rows in a Matrix
/*
ou are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

A row i is weaker than a row j if one of the following is true:

The number of soldiers in row i is less than the number of soldiers in row j.
Both rows have the same number of soldiers and i < j.
Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

 

Example 1:

Input: mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
Output: [2,0,3]
Explanation: 
The number of soldiers in each row is: 
- Row 0: 2 
- Row 1: 4 
- Row 2: 1 
- Row 3: 2 
- Row 4: 5 
The rows ordered from weakest to strongest are [2,0,3,1,4].
Example 2:

Input: mat = 
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]], 
k = 2
Output: [0,2]
Explanation: 
The number of soldiers in each row is: 
- Row 0: 1 
- Row 1: 4 
- Row 2: 1 
- Row 3: 1 
The rows ordered from weakest to strongest are [0,2,3,1].
*/
{
    var kWeakestRows = function (mat, k) {
        let obj = {};
        let res = [];
        mat = mat.map(row => (row.indexOf(0) === -1) ? row.length : row.indexOf(0));
        for (let i = mat.length - 1; i >= 0; i--) {
            if (obj[mat[i]]) obj[mat[i]].push(i);
            else obj[mat[i]] = [i];
        }
        mat.sort((a, b) => a - b);
        for (let i = 0; i < k; i++) res.push(obj[mat[i]].pop());
        return res;
        // Time Complexity: O(m*n)
        // Space Complexity: O(m)
    };


    var kWeakestRows = function (mat, k) {
        return mat
            .map((row, idx) => [idx, row.reduce((acc, cur) => acc + cur)])
            .sort((a, b) => a[1] - b[1])
            .slice(0, k)
            .map(pair => pair[0]);
        // Time Complexity: O(m*n)
        // Space Complexity: O(m)
    }


    const getOnes = (N, arr) => {
        let cnt = 0;
        for (let i = 0; i < N; i++) {
            if (arr[i] === 0) break;
            cnt++;
        }
        return cnt;
    }

    var kWeakestRows = function (mat, k) {
        let N = mat[0].length;
        let res = [];
        let row = 0;

        for (let x of mat) {
            res.push([row, getOnes(N, x)]);
            row++;
        }

        res.sort((a, b) => {
            if (a[1] === b[1]) return a[0] - b[0];
            return a[1] - b[1]
        })

        res.length = k;
        let ans = [];
        for (let x of res) {
            ans.push(x[0]);
        }

        return ans;
    };
    // Candy Crush (M)
    // K-th Smallest Prime Fraction (H)
    // Surface Area of 3D Shapes (E)
    // Alert Using Same Key-Card Three or More Times in a One Hour Period (M)
    // Put Boxes Into the Warehouse II (M)
    // Finding 3-Digit Even Numbers (E)
}