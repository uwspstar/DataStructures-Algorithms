"""
For example, the input [3, 4, -1, 1] should return 2 because it is the smallest positive integer that doesn't exist in the array.

Your solution should run in linear time and use constant space.
"""


def first_missing_positive(nums):
    if not nums:
        return 1
    for i, num in enumerate(nums):
        while i + 1 != nums[i] and 0 < nums[i] <= len(nums):
            v = nums[i]
            nums[i], nums[v - 1] = nums[v - 1], nums[i]
            if nums[i] == nums[v - 1]:
                break
    for i, num in enumerate(nums, 1):
        if num != i:
            return i
    return len(nums) + 1


print(first_missing_positive([3, 4, -1, 1]))
