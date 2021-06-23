{
    // Brute force
    const search = (pat, txt) => {
        let M = pat.length;
        let N = txt.length;
        for (let i = 0; i <= N - M; i++) {
            let j;
            for (j = 0; j < M; j++) {
                if (pat[j] !== txt[i + j])
                    break;
            }
            if (j === M) return i;
        }
        return -1;
    }
}