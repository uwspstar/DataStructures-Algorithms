//17. Letter Combinations of a Phone Number
/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Input: digits = "23" 
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Input: digits = "" Output: []

Input: digits = "2" Output: ["a","b","c"]
*/
class Solution {
    
    List<String> res = new ArrayList<>();
    StringBuilder temp = new StringBuilder();
    String[] mapStr = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"}; 
    
    public List<String> letterCombinations(String digits) {
        if (digits == null || digits.length() == 0) return res;
        backTracking(digits, 0);
        return res; 
    } 
    public void backTracking(String digits, int idx) {
        if (idx == digits.length()) {
            res.add(temp.toString());
            return;
        } else {
            String str = mapStr[digits.charAt(idx) - '0'];//str 表示当前num对应的字符串
            for (int i = 0; i < str.length(); i++) {
                temp.append(str.charAt(i));
                backTracking(digits, idx + 1);
                temp.deleteCharAt(temp.length() - 1);
            }
        }
    }
}
//Generate Parentheses
//Binary Watch