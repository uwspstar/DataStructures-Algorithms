
// longestSubString
{
    const longestSubString = str => {
        if (str.length === 0) return 0;
        if (str.length === 1) return 1;
        let maxLen = 0;
        let map = new Map();
        let fast = 0;
        let slow = 0;
        while (fast < str.length) {
            let key = str[fast];
            let value = map.get(key);
            if (value >= slow) {
                slow = value + 1;
            }
            map.set(key, fast);
            maxLen = Math.max(maxLen, fast - slow + 1);
            fast++;
        }
        return maxLen;
    }
    console.log('10-1: longestSubString', JSON.stringify(longestSubString('gvmasdfadsfasavcbdferes'))); // 9
    console.log('10-1: longestSubString', JSON.stringify(longestSubString('asdfadsfasavcbdferes'))); // 9
    console.log('10-2: longestSubString', JSON.stringify(longestSubString('asdfads'))); // 4
    console.log('10-3: longestSubString', longestSubString('au'));
}