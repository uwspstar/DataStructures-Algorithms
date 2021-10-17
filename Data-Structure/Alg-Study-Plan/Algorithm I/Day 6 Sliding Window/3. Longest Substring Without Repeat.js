// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
{
    // two pointers
    // sliding windows
    // hash mapping
    const lengthOfLongestSubstring = s => {
        if (s.length < 2) return s.length;
        let maxLen = 0;
        let map = new Map();
        let fast = 0;
        let slow = 0;
        //"a b c a b c b b"
        //   s->
        //   v     f
        while (fast < s.length) {
            let key = s[fast];
            let val = map.get(key);
            if (val >= slow) {
                slow = val + 1;
            }
            maxLen = Math.max(maxLen, fast - slow + 1);
            map.set(key, fast)
            fast++;
        }

        return maxLen;
    };
}

/*
int j = 0;
for (int i = 0; i < n; i++) {
    // 不满足则循环到满足搭配为止
    while (j < n && i 到 j之间不满足条件) {
        j += 1;
    }

    if (i 到 j 之间满足条件) {
        处理 i，j 这次搭配
    }
}
*/