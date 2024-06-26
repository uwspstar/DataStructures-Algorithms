//1359. Count All Valid Pickup and Delivery Options
/*
Given n orders, each order consist in pickup and delivery services. 

Count all valid pickup/delivery possible sequences such that delivery(i) is always after of pickup(i). 

Since the answer may be too large, return it modulo 10^9 + 7.

Example 1:

Input: n = 1
Output: 1
Explanation: Unique order (P1, D1), Delivery 1 always is after of Pickup 1.
Example 2:

Input: n = 2
Output: 6
Explanation: All possible orders: 
(P1,P2,D1,D2), (P1,P2,D2,D1), (P1,D1,P2,D2), (P2,P1,D1,D2), (P2,P1,D2,D1) and (P2,D2,P1,D1).
This is an invalid order (P1,D2,P2,D1) because Pickup 2 is after of Delivery 2.
Example 3:

Input: n = 3
Output: 90
*/
{
    let MOD = 1_000_000_007;
    let memo;

    let totalWays = (unpicked, undelivered) => {
        if (unpicked == 0 && undelivered == 0) {
            // We have completed all orders.
            return 1;
        }

        if (unpicked < 0 || undelivered < 0 || undelivered < unpicked) {
            // We can't pick or deliver more than N items
            // Number of deliveries can't exceed number of pickups 
            // as we can only deliver after a pickup.
            return 0;
        }

        if (memo[unpicked][undelivered]) {
            // Return cached value, if already present. 
            return memo[unpicked][undelivered];
        }

        let ans = 0;

        // Count all choices of picking up an order.
        ans += unpicked * totalWays(unpicked - 1, undelivered);
        // Handle integer overflow.
        ans %= MOD;

        // Count all choices of delivering a picked order.
        ans += (undelivered - unpicked) * totalWays(unpicked, undelivered - 1);
        // Handle integer overflow.
        ans %= MOD;

        return memo[unpicked][undelivered] = ans;
    }

    var countOrders = function (n) {
        memo = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
        return totalWays(n, n);
    };
}