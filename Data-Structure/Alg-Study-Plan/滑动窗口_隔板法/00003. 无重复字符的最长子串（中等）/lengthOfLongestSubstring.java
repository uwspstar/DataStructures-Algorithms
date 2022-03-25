public class lengthOfLongestSubstring {
    public int lengthOfLongestSubstring(String s) {
        Set<Character> set = new HashSet<>();
        int left = 0; res = 0;
        for (int i = 0; i < s.length; i++) {
            char c = s.charAt(i);
            while (!set.add(c)) {
                set.remove(s.charAt(left));
                left++;
            }
            res = Math.max(res, i - left + 1);
        }
        return res;    
    }
}
