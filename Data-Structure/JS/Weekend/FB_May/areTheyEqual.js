function areTheyEqual2(array_a, array_b) {
    // Write your code here
    if (array_a.length !== array_b.length) return false;

    let a = array_a.sort((a, b) => a - b);
    let b = array_b.sort((a, b) => a - b);

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function areTheyEqual(array_a, array_b) {
    // Write your code here
    if (array_a.length !== array_b.length) return false;

    array_a.sort((a, b) => a - b);
    array_b.sort((a, b) => a - b);
    let left = 0;
    let right = array_a.length - 1;
    while (left  < right) {
        if (array_a[left] !== array_b[left]) return false;
        if (array_a[right] !== array_b[right]) return false;
        left++;
        right--;
    }
    
    return true;
}

var array_a_1 = [1, 2, 3, 4];
var array_b_1 = [1, 4, 3, 2];

console.log(areTheyEqual(array_a_1, array_b_1));