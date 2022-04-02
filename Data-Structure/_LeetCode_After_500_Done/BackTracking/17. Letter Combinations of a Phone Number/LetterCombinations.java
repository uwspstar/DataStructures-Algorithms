

// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/solution/dian-hua-hao-ma-de-zi-mu-zu-he-by-leetcode-solutio/

import java.util.*;

class LetterCombinations {

    public static List<String> letterCombinations(String digits) {
        List<String> ans = new ArrayList<>();
        if (digits.length() == 0)
            return ans;
        int N = digits.length();

        Map<Character, String> letters = Map.of('2', "abc", '3', "def", '4', "ghi", '5', "jkl", '6', "mno", '7', "pqrs",
                '8', "tuv", '9', "wxyz");

        backTracking(ans, letters, 0, new StringBuilder(), N, digits);

        return ans;
    }

    public static void backTracking(List<String> ans, Map<Character, String> letters, int idx, StringBuilder path,
            int len, String digits) {
        if (path.length() == len) {
            ans.add(path.toString());
            return;
        }
        String curr = letters.get(digits.charAt(idx));

        for (char c : curr.toCharArray()) {
            path.append(c);
            backTracking(ans, letters, idx + 1, path, len, digits);
            path.deleteCharAt(path.length() - 1);
        }
    }

    // Output : [ad, ae, af, bd, be, bf, cd, ce, cf]
    public static void main(String[] args) {
        System.out.println(letterCombinations("23"));
    }
}
