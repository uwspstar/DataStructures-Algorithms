// 131. Palindrome Partitioning
/*
 * Given a string s, partition s such that every substring of the partition is a
 * palindrome. Return all possible palindrome partitioning of s.
 * 
 * A palindrome string is a string that reads the same backward as forward.
 * 
 * Input: s = "aab" Output: [["a","a","b"],["aa","b"]] Input: s = "a" Output:
 * [["a"]]
 */
/*
 * The idea is to generate all possible substrings of a given string and expand
 * each possibility if is a potential candidate. The first thing that comes to
 * our mind is Depth First Search. In Depth First Search, we recursively expand
 * potential candidate until the defined goal is achieved. After that, we
 * backtrack to explore the next potential candidate.
 * 
 * Backtracking incrementally build the candidates for the solution and discard
 * the candidates (backtrack) if it doesn't satisfy the condition.
 * 
 * The backtracking algorithms consists of the following steps:
 * 
 * 1: Choose: Choose the potential candidate. Here, our potential candidates are
 * all substrings that could be generated from the given string.
 * 
 * 2: Constraint: Define a constraint that must be satisfied by the chosen
 * candidate. In this case, the constraint is that the string must be a
 * palindrome.
 * 
 * 3: Goal: We must define the goal that determines if have found the required
 * solution and we must backtrack. Here, our goal is achieved if we have reached
 * the end of the string.
 */
class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> res = new ArrayList<List<String>>();
        ArrayList<String> path = new ArrayList<String>(); // current List
        this.backTracking(0, res, path, s);
        return res;
    }

    private boolean isPalindrome(String s, int low, int high) {
        while (low < high) {
            if (s.charAt(low++) != s.charAt(high--))
                return false;
        }
        return true;
    }

    private void backTracking(int start, List<List<String>> res, List<String> path, String s) {
        if (start >= s.length()) {
            res.add(new ArrayList<String>(path));
        } else {
            for (int end = start; end < s.length(); end++) {
                if (this.isPalindrome(s, start, end)) {
                    path.add(s.substring(start, end + 1));
                    this.backTracking(end + 1, res, path, s);
                    path.remove(path.size() - 1);
                }
            }
        }
    }
}
// Palindrome Partitioning II
// Palindrome Partitioning IV