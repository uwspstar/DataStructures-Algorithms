from typing import List
# Happens if you append a "None" Value to a list/ array / dictionary


class Solution:
    #from typing import List

    def two_sum(self, nums: List[int], target: int) -> List[int]:
        l, r = 0, len(nums) - 1
        while l < r:  # <= means 1 number
            curr_sum = nums[l] + nums[r]
            if curr_sum == target:
                return [l + 1, r + 1]

            if curr_sum > target:
                r -= 1
            else:
                l += 1

        return []


sl = Solution()

print(sl.two_sum([2, 7, 11, 15], 9))
