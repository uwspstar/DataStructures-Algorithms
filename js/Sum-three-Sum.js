/*
The Problem Statement - Given an array nums of n integers, are there elements a, b, c in nums 
such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero. 
Note: The solution set must not contain duplicate triplets. 
Example: Given array nums = [-1, 0, 1, 2, -1, -4]

A solution set is: [ [-1, 0, 1], [-1, -1, 2] ]
*/


// Best 2-Pointer solution of 3-Sum I could arrive at
var threeSum3 = function (nums) {
  nums.sort((a, b) => a - b); // sort first 
  // cannot use num.sort() // JS only sort string
  // https://www.w3schools.com/jsref/jsref_sort.asp

  const result = [];
  
  for (let indexA = 0; indexA < nums.length - 2; indexA++) {
    const a = nums[indexA];
    
    if (a > 0) return result; // sum = 0, has to have number < 0
    
    if (a === nums[indexA - 1]) continue; // duplicate

    let indexB = indexA + 1; // left pointer start
    
    let indexC = nums.length - 1; // right point start

    // Now check if sum is zero, and if NOT, then run the next set of 2 if loop to update indexB and indexC
    while (indexB < indexC) {
      const b = nums[indexB];
      const c = nums[indexC];

      if ((a + b + c) === 0) {
        result.push([a, b, c]);
      }

      // indexB and indexC will be incremented and decremented with each iteration 
      // and gets feeded back to the above while function ( while (indexB < indexC ))
      
      // keep in mind, the array has been sorted at the begining
      
      if ((a + b + c) >= 0) {
        while (nums[indexC - 1] === c) { indexC--; } // remove all duplicate in the sorted array
        // This is equivalent to continue in my previous implementation
        indexC--;
      }

      if((a + b + c ) <= 0) {
        while (nums[indexB + 1] === b) { indexB++ } // remove all duplicate in the sorted array
        // This is equivalent to continue in my previous implementation
        indexB++
      }
    }
  }
  return result;
}

//Solution-2- runs in O(n^2) Time
function threeSum2(arr) {
  
  // sort the arr first
  arr.sort((a, b) => {
    return a - b;
  });

  const result = [];

  for (let indexA = 0; indexA < arr.length - 2; indexA++) {

    let indexB = indexA + 1; // pointer from left ?
    let indexC = arr.length - 1; // pointer from right ?

    if (indexA > 0 && arr[indexA] === arr[indexA - 1]) continue;

    while (indexB < indexC ) {

      let sum = arr[indexA] + arr[indexB] + arr[indexC];

      if (sum < 0) {
        indexB++;
      } else if (sum > 0) {
        indexC--;
      } else {
        result.push([arr[indexA], arr[indexB], arr[indexC]]);
        while (arr[indexB] === arr[indexB + 1]) indexB++;
        while (arr[indexC] === arr[indexC - 1]) indexC--
        indexB++;
        indexC--;
      }
    }
  }
  return result;
}



//Solution-1-Brute Force
var threeSum_Brute = function(nums) {
  nums = nums.sort(function (a, b) {
    return a - b;
  });

  let uniqueTriplets = [];
  let i, j, k;
  let len = nums.length;

  for (i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue;  
    // The continue statement "jumps over" one iteration in the loop. 
    // So, if 2 successive elements are same (i.e. duplicates) leave this iteration and jump over to the next one

    for (j = i + 1; j < len; j++) {
      if ( j > i + 1 && nums[j] === nums[j-1]) continue;

      for (k = j + 1; k < len; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;

        if ((nums[i] + nums[j] + nums[k]) === 0) {
          uniqueTriplets.push([nums[i], nums[j], nums[k]]);
          // wrapping individual elements nums[i], nums[j], nums[k] 
          // into a wrapper-array in the .push function. 
          // So that the final output comes in multiple array as required by the original problem statement.
        }
      }
    }
  }
  return uniqueTriplets;
 }

console.log(threeSum_Brute([-1, 0, 1, 2, -1, -4]));
// Will output - [[-1, 0, 1], [-1, -1, 2]]
