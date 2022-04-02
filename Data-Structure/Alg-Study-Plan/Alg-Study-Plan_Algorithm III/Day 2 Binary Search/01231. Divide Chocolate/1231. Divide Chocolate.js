// the sum of a contiguous subarray stands for the sweetness of the chocolate piece represented by this subarray. 
// Here the task is to find the maximum possible minimum sum of all subarrays after dividing the array into k + 1 contiguous subarrays.
// Thus the original question becomes: how can we find the maximum workable value among all workable values a, b, c, and d?

// Approach 1: Binary Search + Greedy
var maximizeSweetness = function (sweetness, K) {
    const totalSweetness = sweetness.reduce((a, b) => a + b, 0);
    let low = 1;
    let high = Math.floor(totalSweetness / (K + 1));
    while (low < high) {
        const mid = Math.floor((low + high + 1) / 2);
        let chunkSweetness = 0;
        let cuts = 0
        for (const piece of sweetness) {
            chunkSweetness += piece;
            if (chunkSweetness >= mid) {
                cuts++;
                chunkSweetness = 0;
            }
        }
        if (cuts > K) {
            low = mid;
        } else {
            high = mid - 1;
        }
    }
    return low;
};
// Erect the Fence (H)
// Binary Prefix Divisible By 5 (E)
// Evaluate the Bracket Pairs of a String (M)