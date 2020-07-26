# ordered
def binary_search(nums, num):
    start = 0
    end = len(nums) - 1
    while start < end:
        mid = (nums[start] + nums[end]) >> 1
        if nums[mid] == num:
            return True
        if target > num:
