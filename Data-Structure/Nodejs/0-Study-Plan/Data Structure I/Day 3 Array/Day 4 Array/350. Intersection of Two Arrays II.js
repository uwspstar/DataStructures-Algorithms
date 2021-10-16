const intersect = (nums1, nums2) => {
    let result = [];
    //O(M)
    let map = nums1.reduce((acc, i) => {
        acc[i] = acc[i] ? acc[i] + 1 : 1;
        return acc;
    }, {});

    //O(N)
    for (let i = 0; i < nums2.length; i++) {
        let current = nums2[i];
        let currentMapItem = map[current];

        if (currentMapItem && currentMapItem > 0) {
            result.push(current);
            map[current] = currentMapItem - 1;
        }
    }

    return result;
};