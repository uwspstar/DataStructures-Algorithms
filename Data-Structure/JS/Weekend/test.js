var maxArea = function(arr) {
    if (arr.length < 2) return 0;
    let ai = 0;
    let bi = arr.length - 1;
    let maxArea = 0;
    while (ai < bi) {
        let width = bi - ai;
        let height = Math.min(arr[bi], arr[ai]);
        maxArea = Math.max(maxArea, width * height);
        ai < bi ? ai++ : bi--;
    }
    return maxArea;
};
