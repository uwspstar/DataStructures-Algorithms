"""
sorted: 一种直接的编码方式就是排序,不过排序的复杂度略高。

hashmap: 异位词中字符出现的次数肯定都是一样的，所以可以把 s, t 中的字符计数器作为编码，比较每个字符的出现次数即可判断 s 和 t 是否是异位词。
"""

from collections import defaultdict
from collections import Counter


class Solution:
    # Anagram using all the original letters exactly once.
    def isAnagram(self, s: str, t: str) -> bool:

        return sorted(s) == sorted(t)
    """
    
    def isAnagram(self, s: str, t: str) -> bool:
        hashmap = defaultdict(int)
        if len(s) != len(t):
            return False
        
        for x in s:
            hashmap[x] += 1
        
        for y in t:
            hashmap[y] -= 1
            if hashmap[y] < 0:
                return False
        
        return True
    """
