// 1570. Dot Product of Two Sparse Vectors (M)
{
    // two pointers, only save non zero element
    class SparseVector {
        constructor(nums) {
            this.pairs = [];//seperate storage for each vector
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] !== 0) {
                    this.pairs.push([i, nums[i]]);
                }
            }
        }

        dotProduct(vec) { //sparse vector is being passed in that has our *pairs* in it 
            let res = 0,
                let p = 0, q = 0;
            let M = this.pairs.length, N = vec.pairs.length

            while (p < M && q < N) {

                if (this.pairs[p][0] === vec.pairs[q][0]) {//same index for both storage 
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
{
    var SparseVector = function (nums) {
        this.nums = nums;
    };

    SparseVector.prototype.dotProduct = function (vec) {
        let sum = 0;
        for (let i = 0; i < vec.nums.length; i++) {
            if (this.nums[i] && vec.nums[i]) {
                sum += this.nums[i] * vec.nums[i];
            }
        }
        return sum;
    };

}