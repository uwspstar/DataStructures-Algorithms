class Solution {

    List<String> res = new ArrayList<>();
    StringBuilder temp = new StringBuilder();

    // idx 0 and 1 is "";
    String[] mapStr = { "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };
    

    public List<String> letterCombinations(String digits) {
        if (digits == null || digits.length() == 0) {
            return res;
        } 
        backTracking(digits, 0);
        return res;
    }

    public void backTracking(String digits, int idx) {
        if (idx == digits.length()) {
            res.add(temp.toString());
            return;
        } else {
            String str = mapStr[digits.charAt(idx) - '0'];// str 表示当前num对应的字符串
            for (int i = 0; i < str.length(); i++) {
                temp.append(str.charAt(i));
                backTracking(digits, idx + 1);
                temp.deleteCharAt(temp.length() - 1);
            }
        }
    }
}
// Generate Parentheses
// Binary Watch

class Solution2 {
    private List<String> combinations = new ArrayList<>();
    private Map<Character, String> letters = Map.of(
            '2', "abc", '3', "def", '4', "ghi", '5', "jkl",
            '6', "mno", '7', "pqrs", '8', "tuv", '9', "wxyz");
    private String phoneDigits;

    public List<String> letterCombinations(String digits) {
        // If the input is empty, immediately return an empty answer array
        if (digits.length() == 0) {
            return combinations;
        }

        // Initiate backtracking with an empty path and starting index of 0
        phoneDigits = digits;
        backtrack(0, new StringBuilder());
        return combinations;
    }

    private void backtrack(int index, StringBuilder path) {
        // If the path is the same length as digits, we have a complete combination
        if (path.length() == phoneDigits.length()) {
            combinations.add(path.toString());
            return; // Backtrack
        }

        // Get the letters that the current digit maps to, and loop through them
        String possibleLetters = letters.get(phoneDigits.charAt(index));

        for (char letter : possibleLetters.toCharArray()) {
            // Add the letter to our current path
            path.append(letter);
            // Move on to the next digit
            backtrack(index + 1, path);
            // Backtrack by removing the letter before moving onto the next
            path.deleteCharAt(path.length() - 1);
        }
    }
}