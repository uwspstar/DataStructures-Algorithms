# 238. Product of Array Except Self
# prefix
# postfix

from typing import List


class Solution:
    def product_except_self (self, nums: List[int]) -> List[int]:
        res = [1] * len(nums)

        prefix = 1
        for i in range(len(nums)):
            res[i] = prefix
            prefix *= nums[i]

        postfix = 1
        for i in range(len(nums) -1, -1, -1):
            res[i] *= postfix
            postfix *= nums[i]
        
        return res
        

sl = Solution()
nums = [1,2,3,4]
print(sl.product_except_self(nums)) # [24, 12, 8, 6]