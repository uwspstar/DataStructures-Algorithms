//[Hard] 862. Shortest Subarray with Sum at Least K
/*
Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. If there is no such subarray, return -1.

A subarray is a contiguous part of an array.

---------------------------------------------
the key point is the arr can have negative element,
for slu for 209. is not working,

nums =      [84, -37, 32, 40, 95]   k = 167
preSum : [0, 84, 47, 79, 119, 214]  
preSum[y] - preSum[x] >= x

*/