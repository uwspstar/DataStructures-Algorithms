from ast import List

#nums = [-2,1,-3,4,-1,2,1,-5,4]
class Solution:
    def maxSubArray(self, nums):
            if nums is None:
                return 0
            if len(nums) == 1:
                return nums[0]

            curr_sum, max_sum = 0, nums[0]
            for num in nums:
                if curr_sum < 0:
                    curr_sum = 0
                curr_sum += num
                max_sum = max(curr_sum, curr_sum)
            
            return max_sum

sl = Solution()
print(sl.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

'''
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        curr_sum, max_sum = 0, nums[0]
        
        for num in nums: 
            if curr_sum < 0:
                curr_sum = 0
            curr_sum += num
            max_sum = max(max_sum, curr_sum)
            
        return max_sum
'''
