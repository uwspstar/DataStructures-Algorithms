// lower case English letter
const map = new Array(26).fill(0);
for (let i = 0; i < str.length; i++) {
    map[str[i].charCodeAt() - 97]++;
}

// array 128 0
let occurrences = [...Array(128)].map(x => 0);