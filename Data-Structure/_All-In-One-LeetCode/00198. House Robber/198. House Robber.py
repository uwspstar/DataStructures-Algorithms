from typing import List


class Solution:
    def rob(self, nums: List[int]) -> int:
        if not nums:
            return 0
        
        rob1, rob2 = 0, 0
        for num in nums:
            tmp = max(rob1 + num, rob2)
            rob1 = rob2
            rob2 = tmp

        return rob2

sl = Solution()
print(sl.rob([2,7,9,3,1])) # 12