/*
Given a staircase of n steps, and a set of possible steps that we can climb at a time named possibleSteps, create a function that returns the number of ways that a person can take to reach the top of the staircase.

Example 1:

Input: n = 5, possibleSteps = {1, 2}

Output: 8

Explanation: possible ways to reach the top are: 1 1 1 1 1, 1 1 1 2, 1 1 2 1, 1 2 1 1, 2 1 1 1, 1 2 2, 2 1 2, 2 2 1
*/

// By using recursion:

// Time complexity: O(m^n)
// Space complexity: O(n)

function waysToClimb(n, possibleSteps) {
  if (n == 0) return 1;
  let nbWays = 0;
  for (let steps of possibleSteps)
    if ((n - steps) >= 0)
      nbWays += waysToClimb(n - steps, possibleSteps);
  return nbWays;
}


