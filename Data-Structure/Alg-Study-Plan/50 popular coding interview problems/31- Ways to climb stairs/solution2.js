// By using dynamic programming:

// Time complexity: O(n*m)
// Space complexity: O(n)


function waysToClimb(n, possibleSteps){
  nbWaysArr = [...Array(n+1)].map(x => 0);
  nbWaysArr[0] = 1;
  for(let i = 1; i < n+1; i++){
    let nbWays = 0;
    for(let steps of possibleSteps)
      if((i-steps) >= 0)
        nbWays += nbWaysArr[i-steps];
    nbWaysArr[i] = nbWays;
  }
  return nbWaysArr[n];
}


