// Brute force solution:

// Time complexity: O(n^3)
// Space complexity: O(n)

function withoutRepeating(str) {
    let visited = [...Array(128)].map(x => false);
    for (let i = 0; i < str.length; i++) {
        if (visited[str.charCodeAt(i)]) return false;
        else visited[str.charCodeAt(i)] = true;
    }
    return true;
}

function longestSubstringWithoutRepeating(str) {
    let maxLength = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let substr = str.substring(i, j + 1);
            if (withoutRepeating(substr) && substr.length > maxLength)
                maxLength = substr.length;
        }
    }
    return maxLength;
}


