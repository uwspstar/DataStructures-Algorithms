// 1231. Divide Chocolate
/*
ou have one chocolate bar that consists of some chunks. Each chunk has its own sweetness given by the array sweetness.

You want to share the chocolate with your k friends so you start cutting the chocolate bar into k + 1 pieces using k cuts, each piece consists of some consecutive chunks.

Being generous, you will eat the piece with the minimum total sweetness and give the other pieces to your friends.

Find the maximum total sweetness of the piece you can get by cutting the chocolate bar optimally.

 

Example 1:

Input: sweetness = [1,2,3,4,5,6,7,8,9], k = 5
Output: 6
Explanation: You can divide the chocolate to [1,2,3], [4,5], [6], [7], [8], [9]
Example 2:

Input: sweetness = [5,6,7,8,9,1,2,3,4], k = 8
Output: 1
Explanation: There is only one way to cut the bar into 9 pieces.
Example 3:

Input: sweetness = [1,2,2,1,2,2,1,2,2], k = 2
Output: 5
Explanation: You can divide the chocolate to [1,2,2], [1,2,2], [1,2,2]
*/
{
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

    // https://leetcode.com/problems/divide-chocolate/discuss/920639/Detailed-explanation-of-using-Binary-Search-(Python-JS-Go)
}
{
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
}