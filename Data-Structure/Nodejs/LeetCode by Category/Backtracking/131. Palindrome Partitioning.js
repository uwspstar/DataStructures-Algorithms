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
{
    var partition = function (s) {
        let res = [];
        let path = [];

        const isPalindrome = (s, start, end) => {
            while (start < end) {
                if (s[start++] != s[end--]) return false;
            }
            return true;
        }

        const backTracking = (start) => {
            if (start >= s.length) {
                res.push(path.slice());//deep copy string
            } else {
                for (let end = start; end < s.length; end++) {
                    if (isPalindrome(s, start, end)) { 
                        path.push(s.substring(start, end + 1));
                        backTracking(end + 1); //isPalindrome add 1 more
                        path.pop();
                    }
                }
            }
        }

        backTracking(0);

        return res;
    };
}