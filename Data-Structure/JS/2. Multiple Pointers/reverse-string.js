const reverseStr = function (str) {
    // O(n)
    if (str.length < 2) return str;

    const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]] };

    let arr = str.split('');
    let i = 0;
    let j = arr.length;

    while (i < j) {
        swap(arr, i, j);
        i++;
        j--;
    }

    return arr.join('');
}

function reverseStr(str) {
    // only arr has reverse function
    // not join() return arr, not string
    return str.split('').reverse().join('');
}

// Recursive
const reverseStrRecursive = function (str) {
    return str.length < 2 ? str : reverseStrRecursive(str.slice(1)) + str[0];
}

console.log('reverseStr', reverseStr("abcde"));
console.log('reverseStr', reverseStr("abcdef"));