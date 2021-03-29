var minWindow = function (s, t) {
    if (s.length === 0 || s.length < t.length) return '';
    const need = new Map();
    for (let c of t) {
        need.set(c, need.has(c) ? need.get(c) + 1 : 1);
    }
    let needType = need.size;

    let result = '';
    let left = 0;
    let right = 0;

    while (right < s.length) {
        const c = s[right];
        if (need.has(c)) {
            need.set(c, need.get(c) - 1);
            if (need.get(c) === 0) needType -= 1;
        }
        while (needType === 0) {
            let newResult = s.substring(left, right + 1);
            if (!result.length || newResult.length < result.length) {
                result = newResult;
            }
            const c2 = s[left];
            if (need.has(c2)) {
                need.set(c2, need.get(c2) + 1);
                if (need.get(c2) === 1) needType += 1;
            }
            left++;
        }
        right++;
    }
    return result;
};