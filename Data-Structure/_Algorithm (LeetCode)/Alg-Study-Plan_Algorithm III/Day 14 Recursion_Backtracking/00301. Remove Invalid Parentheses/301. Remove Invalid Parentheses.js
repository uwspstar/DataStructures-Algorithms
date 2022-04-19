// 301. Remove Invalid Parentheses
/*
Given a string s that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.

Return all the possible results. You may return the answer in any order.

Example 1:
Input: s = "()())()"
Output: ["(())()","()()()"]

Example 2:
Input: s = "(a)())()"
Output: ["(a())()","(a)()()"]

Example 3:
Input: s = ")("
Output: [""]
*/
{
    /**
 * @param {string} s
 * @return {string[]}
 */
    // Given a string s that contains parentheses and letters,
    // remove the minimum number of invalid parentheses to make the input string valid.

    var removeInvalidParentheses = function (s) {
        const helper = new RemoveInvalid(s);
        return helper.options;
    };

    class RemoveInvalid {
        constructor(string) {
            this.options = [];
            this.remove(string, 0, 0, '(', ')');
        }

        remove(string, startI, startJ, open, close) {
            let count = 0;
            for (let i = startI; i < string.length; i++) {
                const char = string[i];
                if (char === open) count++;
                if (char === close) count--;

                if (count >= 0) continue; // we haven't found a missing parentheses

                // we found an invalid parentheses...
                // let's loop over from the startJ and find all the possible substrings
                // we can come up with by removing the first possible closing parentheses
                for (let j = startJ; j <= i; j++) {
                    // avoid duplicates by skipping if the prev char was a closing parentheses (since we would have already added it)
                    if (string[j] === close && (j === startJ || string[j - 1] !== close)) {
                        // i = the index where we found the extra closing parentheses
                        // j = the index where we removed a closing parenthese to make our substring valid
                        this.remove(string.substring(0, j) + string.substring(j + 1), i, j, open, close);
                    }
                }
                // our recursion above will handle all other possible substrings, we can terminate now.
                // If we didn't, we would be adding an invalid string to our list of valid options below.
                return;
            }

            // we need to reverse our string to account for other possible solutions (right to left)
            // if we just went right to left, we need to reverse again to get our original string
            const reverse = string.split('').reverse().join('');
            if (open === '(') {
                this.remove(reverse, 0, 0, ')', '(');
            } else {
                // we've went left to right, and right to left
                // if we got to this point, our string contains no missing parentheses
                this.options.push(reverse);
            }
        }
    }
    // s = "(a)()()" -> (a)()() , ()(a)()
}