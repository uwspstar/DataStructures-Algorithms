from typing import List


class Solution:
    def contains_duplicate(self, nums: List[int]) ->bool:
        hash_set = set()
        for n in nums:
            if n in hash_set:
                return True
            hash_set.add(n)

        return False

        

sl = Solution()
nums = [1,1,1,3,3,4,3,2,4,2]
print(sl.contains_duplicate(nums)) # true