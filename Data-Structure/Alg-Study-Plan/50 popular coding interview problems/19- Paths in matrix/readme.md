# Complexity analysis

- https://www.udemy.com/course/50-problems/learn/lecture/25981040#questions

Solution 1:

We put n = number of rows
m = number of columns

Time complexity: O(2^(n+m))

Explanation:

What we're doing is that we are moving by one cell at each function call, and we're calling the function twice (once to go to the right and once to the bottom)

So if we put N=n+m that represents the number of cells to go from the top-left cell to the bottom-right cell (the length of a path), then we can write that:

T(N) = 2T(N-1)+1

Because we are moving by one cell so the number of remaining cells becomes N-1, we are calling the function twice, this is why we multiplied by 2, and remaining operations in the function call cost O(1)

We also have T(0) = 1 because in the base case we just return the value of a cell

Let's use the recurrence relation method:

T(N) = 2(2T(N-2)+1)+1

T(N) = 4T(N-2) + 3

T(N) = 4(2T(N-3)+1)+3

T(N) = 8T(N-3) + 7

T(N) = 8(2T(N-4)+1)+7

T(N) = 16T(N-4) + 15

T(N) = 16(2T(N-5)+1)+15

T(N) = 32T(N-5) + 31

.

.

T(N) = (2^k)T(N-k) + (2^k)-1

.

.

T(N) = (2^N)T(N-N) + (2^N)-1

T(N) = (2^N)T(0) + (2^N)-1

T(N) = (2^N) + (2^N)-1

T(N) = 2(2^N)-1

T(N) = O(2^N)

We know that N=n+m, so we replace and we get an O(2^(n+m)) time complexity

Bonus info: why we've put N=n+m and not N=n\*m? It's because we can only move to the right or to the bottom, so the length of a path between the top-left cell and the bottom-right cell is n+m

Space complexity: O(n+m)

Explanation:

We are not using input-size related variables, but we have the call stack size, and the call stack size depends on the depth of the recursion tree

Here we are moving by one cell at each recursive call, and the length of the path to go from the top-left cell to the bottom-right cell is n+m, so the space complexity is O(n+m)

Solution 2:

We put n = number of rows

            m = number of columns

Time complexity: O(n\*m)

Explanation:

We are traversing a matrix of size n*m, the time complexity is O(n*m)

Space complexity: O(n\*m)

Explanation:

We are using an extra matrix of size n*m, the dp matrix, the space complexity is O(n*m)
