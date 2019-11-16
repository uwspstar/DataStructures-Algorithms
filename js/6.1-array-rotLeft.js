/*
Sample Input

5 4
1 2 3 4 5
Sample Output

1 2 3 4 5

step 1 -> 2 3 4 5 1
step 2 -> 3 4 5 1 2
step 3 -> 4 5 1 2 3
step 4 -> 5 1 2 3 4

5 1 2 3 4

*/

// Complete the rotLeft function below.
function rotLeft(a, d) {
    while (d--) {
        a.push(a.shift());
    }
    return a;
}
