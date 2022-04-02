//1009. Complement of Base 10 Integer
//Time Complexity: O(1), since we're doing not more than 32 iterations here.
//Space Complexity: O(1).

var bitwiseComplement = function (N) {
    if (N === 0) return 1;

    let todo = N;
    let bit = 1;

    while (todo !== 0) {
        N = N ^ bit;
        bit = bit << 1;
        todo = todo >> 1;
    }

    return N;
};