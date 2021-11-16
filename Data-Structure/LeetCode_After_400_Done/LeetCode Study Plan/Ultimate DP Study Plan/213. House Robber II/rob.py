def rob(self, nums: List[int]) -> int:
    n = len(nums)
    if n == 1:
        return nums[0]

    @cache
    def dp(i: int, j: int) -> int:
        if (j < i):
            return 0
        return max(nums[j] + dp(i, j - 2), dp(i, j - 1))
    return max(dp(0, n - 2), dp(1, n - 1))
