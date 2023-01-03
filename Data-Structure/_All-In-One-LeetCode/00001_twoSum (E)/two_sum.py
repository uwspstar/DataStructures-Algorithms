from ast import List

"""
enumerate is useful for obtaining an indexed list:
    (0, seq[0]), (1, seq[1]), (2, seq[2]), ...
"""


class Solution:
    def two_sum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}  # k = val, v = index

        for i, n in enumerate(nums):
            diff = target - n
            if diff in hashmap:
                return [hashmap[diff], i]
            hashmap[n] = i

        return
