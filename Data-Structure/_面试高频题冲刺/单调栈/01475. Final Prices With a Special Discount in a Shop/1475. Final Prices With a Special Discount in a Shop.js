// 1475. Final Prices With a Special Discount in a Shop
/*
Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.

Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.

Example 1:
Input: prices = [8,4,6,2,3] Output: [4,2,4,2,3]
Explanation: 
For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4. 
For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2. 
For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4. 
For items 3 and 4 you will not receive any discount at all.

Example 2:
Input: prices = [1,2,3,4,5] Output: [1,2,3,4,5]
Explanation: In this case, for all items, you will not receive any discount at all.
*/
{
    // [8,4,6,2,3] -> [4,2,4,2,3]

    var finalPrices = function (prices) {
        if (prices === null || prices.length === 1) return prices;
        let N = prices.length;
        let res = [...prices];
        let stk = []; // idx;

        for (let i = 0; i < N; i++) {
            while (stk.length > 0 && prices[stk[stk.length - 1]] >= prices[i]) {
                //
                res[stk[stk.length - 1]] = res[stk[stk.length - 1]] - prices[i];
                stk.pop();
            }
            stk.push(i);
            // stk [3, 4]
            // res [8,4,6,2,3] -> [4,2,4,2,3]
        }
        return res;
    };
}