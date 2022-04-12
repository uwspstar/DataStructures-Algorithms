// 1570. Dot Product of Two Sparse Vectors
/*
Given two sparse vectors, compute their dot product.

Implement class SparseVector:

SparseVector(nums) Initializes the object with the vector nums
dotProduct(vec) Compute the dot product between the instance of SparseVector and vec
A sparse vector is a vector that has mostly zero values, you should store the sparse vector efficiently and compute the dot product between two SparseVector.

Follow up: What if only one of the vectors is sparse?

Example 1:

Input: nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]
Output: 8
Explanation: v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
v1.dotProduct(v2) = 1*0 + 0*3 + 0*0 + 2*4 + 3*0 = 8
Example 2:

Input: nums1 = [0,1,0,0,0], nums2 = [0,0,0,0,2]
Output: 0
Explanation: v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
v1.dotProduct(v2) = 0*0 + 1*0 + 0*0 + 0*0 + 0*2 = 0
Example 3:

Input: nums1 = [0,1,0,0,2,0,0], nums2 = [1,0,0,0,3,0,4]
Output: 6
*/
{
    class SparseVector {
        constructor(nums) {
            this.pairs = [];//only save not zero idx and val
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] !== 0) {
                    this.pairs.push([i, nums[i]]); //only save not zero idx and val
                }
            }
        }

        dotProduct(vec) {
            // vec has the obj attribute pairs
            let res = 0;
            let p = 0, q = 0;
            let M = this.pairs.length, N = vec.pairs.length;

            while (p < M && q < N) {
                //same index for both storage 
                if (this.pairs[p][0] === vec.pairs[q][0]) {
                    res = res + (this.pairs[p][1] * vec.pairs[q][1]);
                    p++;
                    q++;
                } else if (this.pairs[p][0] > vec.pairs[q][0]) {
                    q++;  // q needs to catch up p
                } else {
                    p++;
                }
            }
            return res;
        }
    }
}