//937. Reorder Data in Log Files
/*
You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

There are two types of logs:

Letter-logs: All words (except the identifier) consist of lowercase English letters.
Digit-logs: All words (except the identifier) consist of digits.
Reorder these logs so that:

The letter-logs come before all digit-logs.
The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
The digit-logs maintain their relative ordering.
Return the final order of the logs.


Example 1:
Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
Explanation:
The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".

Example 2:
Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
*/
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {

    function getLog(str) { // get after-identifier part of log
        return str.slice(str.indexOf(' ') + 1);
    }

    function isDigitalStr(str) {  
        // the condition is that either ALL str[i] are digits or they ALL are symbols , so we may check str[0] only
        return (str[0] >= '0' && str[0] <= '9') ? true : false;
    }

    function compare(a, b) {  // main comparing function for 2 strings, if they're equal then compares identifiers
        let res = getLog(a).localeCompare(getLog(b));
        return (res == 0) ? a.slice(0, a.indexOf(' ')).localeCompare(b.slice(0, b.indexOf(' '))) : res;
    }

    let resLogs = []; // the resulting array: all digital logs will go into it before symbol logs
    let symbolLogs = []; // the array for sorting symbol logs

    for (let i = 0; i < logs.length; i++) {

        if (isDigitalStr(getLog(logs[i]))) {
            resLogs.push(logs[i]);
        } else {
            symbolLogs.push(logs[i]);
        }

    }

    return [...symbolLogs.sort(compare), ...resLogs];
};