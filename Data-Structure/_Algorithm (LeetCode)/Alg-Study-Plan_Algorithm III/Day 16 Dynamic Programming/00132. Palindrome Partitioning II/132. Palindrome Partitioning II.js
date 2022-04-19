// 132. Palindrome Partitioning II
{
    var minCut = function (s) {
        const len = s.length;
        const g = new Array(len).fill(0).map(() => new Array(len).fill(true));

        for (let i = len - 1; i >= 0; --i) {
            for (let j = i + 1; j < len; ++j) {
                g[i][j] = s[i] == s[j] && g[i + 1][j - 1];
            }
        }

        const f = new Array(len).fill(Number.MAX_SAFE_INTEGER);
        for (let i = 0; i < len; ++i) {
            if (g[0][i]) {
                f[i] = 0;
            } else {
                for (let j = 0; j < i; ++j) {
                    if (g[j + 1][i]) {
                        f[i] = Math.min(f[i], f[j] + 1);
                    }
                }
            }
        }

        return f[len - 1];
    };
}