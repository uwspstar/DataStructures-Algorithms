"""
Loop Invariant, Linear Search, Sorting and Hash Table.

 when n is not sufficiently large, an O(n)O algorithm can be slower than an O(nlogn) algorithm.
"""

from typing import List

# s1 t: O(N) s: O(N)


class Solution:
    def contains_duplicate(self, nums: List[int]) -> bool:
        # set: Build an unordered collection of unique elements.
        hash_set = set()
        for n in nums:
            if n in hash_set:
                return True
            hash_set.add(n)

        return False


sl = Solution()
print(sl.contains_duplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))  # true
print(sl.contains_duplicate([1, 3, 4, 2]))  # false

"""
(class) set()

set(__iterable: Iterable, /)

set() -> new empty set object set(iterable) -> new set object

Build an unordered collection of unique elements.
"""
# s2, sorting : O(NlogN)

# Problem 219 Contains Duplicate II
# Problem 220 Contains Duplicate III