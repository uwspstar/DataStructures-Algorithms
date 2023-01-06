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

# two pointers


def isPalindrome(self, s: str) -> bool:
    left, right = 0, len(s)-1

    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1

        if left < right and s[left].lower() != s[right].lower():
            return False

        left += 1
        right -= 1

    return True
