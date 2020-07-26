# ordered
def binary_search(nums, num):
    if num < nums[0] or num > nums[-1]:
        return False

    start = 0
    end = len(nums) - 1

    while start < end:
        mid = (start + end) >> 1
        if nums[mid] == num:
            return True
        if nums[mid] > num:
            end = mid - 1
        else:
            start = mid + 1

    return False


print(binary_search([1, 2, 3, 4, 5], 6))  # False
print(binary_search([2, 3, 4, 5], 1))  # False
print(binary_search([1, 2, 3, 4, 5], 3))  # True
print(binary_search([1, 2, 4, 5], 3))  # False
