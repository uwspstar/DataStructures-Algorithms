//791. Custom Sort String
/*
order and str are strings composed of lowercase letters. In order, no letter occurs more than once.

order was sorted in some custom order previously. We want to permute the characters of str so that they match the order that order was sorted. More specifically, if x occurs before y in order, then x should occur before y in the returned string.

Return any permutation of str (as a string) that satisfies this property.

Example:
Input: 
order = "cba" str = "abcd" Output: "cbad"
Explanation: 
"a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a". 
Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.
*/
{
    var customSortString = function (order, str) {
        const count = {};
        for (let i = 0; i < str.length; i++) {
            count[str[i]] = (count[str[i]] ?? 0) + 1;
        }
        let result = "";

        for (let i = 0; i < order.length; i++) {
            if (count[order[i]]) {
                result += String(order[i]).repeat(count[order[i]]);
                delete count[order[i]];
            }
        }

        Object.keys(count).forEach((key) => {
            result += String(key).repeat(count[key]);
        })

        return result;
    };
}
{
    var customSortString = function (S, T) {
        let hash = {};
        for (let t of T) { //O(T)
            hash[t] ? hash[t] = 1 + hash[t] : hash[t] = 1;
        }
        let res = [];
        for (let s of S) { //O(S)
            if (hash[s]) {
                let n = hash[s];
                while (n > 0) { //O(N)
                    res.push(s);
                    n--;
                }
                delete hash[s];
            }
        }
        for (let t of T) { //O(T)
            if (hash[t]) {
                res.push(t);
            }
        }
        return res.join('');
    };
    //954. Array of Doubled Pairs
    //1061. Lexicographically Smallest Equivalent String
    //1500. Design a File Sharing System
}
{
    var customSortString = function (S, T) {
        T = T.split("");
        T.sort((a, b) => {
            a = S.indexOf(a);
            b = S.indexOf(b);
            if (a === -1) a = 26;
            if (b === -1) b = 26;

            return a - b;
        });
        return T.join("");
    }
}