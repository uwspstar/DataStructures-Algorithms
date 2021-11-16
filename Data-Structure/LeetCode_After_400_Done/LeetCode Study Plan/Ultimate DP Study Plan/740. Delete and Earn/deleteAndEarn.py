# 740. Delete and Earn
class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        houses = [0] * (10 ** 4 + 1)
        for x in nums:
            houses[x] += x
        # print(houses)
        @cache
        def dp(i: int) -> int:
            if i < 0:
                return 0
            return max(houses[i] + dp(i - 2), dp(i - 1))
        return dp(len(houses) - 1)
