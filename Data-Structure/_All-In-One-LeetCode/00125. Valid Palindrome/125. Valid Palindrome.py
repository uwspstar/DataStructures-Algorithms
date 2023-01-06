"""
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
"""


class Solution:
    def isPalindrome(self, s: str) -> bool:
        new_str = ''
        for c in s:
            if c.isalnum():
                new_str += c.lower()  # lower
        return new_str == new_str[::-1]  # reverse
