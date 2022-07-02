from typing import List


class Solution:
    def max_profit(self, prices: List[int]) -> int:
        if len(prices) < 2:
            return 0
        if prices is None:
            return 0

        l, r = 0, 0 # left = buy, right = sell
        max_profit = 0

        while r < len(prices) :
            if prices[l] < prices[r]:
                profit =  prices[r] - prices[l]
                max_profit = max(max_profit, profit)
            else:
                l = r
            r += 1

        return max_profit


sl = Solution()

print(sl.max_profit([7,1,5,3,6,4])) # 5