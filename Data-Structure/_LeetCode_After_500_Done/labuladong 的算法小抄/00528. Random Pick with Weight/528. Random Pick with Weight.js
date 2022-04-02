/*
528. Random Pick with Weight
You are given a 0-indexed array of positive integers w where w[i] describes the weight of the ith index.
You need to implement the function pickIndex(), which randomly picks an index in the range [0, w.length - 1] (inclusive) and returns it. The probability of picking an index i is w[i] / sum(w).
For example, if w = [1, 3], the probability of picking index 0 is 1 / (1 + 3) = 0.25 (i.e., 25%), and the probability of picking index 1 is 3 / (1 + 3) = 0.75 (i.e., 75%).

*/
{


    var Solution = function (w) {
        this.prefixSum = [];
        this.totalSum = 0;
        for (let i = 0; i < w.length; i++) {
            this.totalSum += w[i];
            this.prefixSum[i] = this.totalSum;
        }
    };
    Solution.prototype.pickIndex = function () {
        let left = 0;
        let right = this.prefixSum.length - 1;
        let target = this.totalSum * Math.random();

        while (left < right) {
            let mid = left + Math.floor((right - left) / 2);

            if (this.prefixSum[mid] < target) {
                left = mid + 1;
            }
            else {
                right = mid;
            }
        }
        return left;
    };
}