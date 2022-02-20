// sliding window
var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    let window = [];
    for (let i = 0; i < s.length; i++ ) {
        let curr = s[i];
        while (window.indexOf(curr) >= 0) {
            window.shift();
        }
        window.push(curr);
        ans = Math.max(ans, window.length);
    } 
    return ans;
}