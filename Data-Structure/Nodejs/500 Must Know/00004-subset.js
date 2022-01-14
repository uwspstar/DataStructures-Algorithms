{
    //Input: nums = [1,2,3]
    //Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

    const subsets = nums => {
        if (nums.length === 0) return {};
        let res = [];
        const backTrack = (arr, len, start) => {
            if (arr.length === len) { 
                res.push(arr); 
                console.log('len =', len, 'arr =',arr , 'res =', res);
                return;
            } else {
                for (let i = start; i < nums.length; i++ ) {
                    console.log('start =', start, 'arr =', arr,'nums[i]=', nums[i]);
                    backTrack(arr.concat(nums[i]), len, i + 1)
                }
            }
        }
        for (let len = 0; len <= nums.length; len++) {
            console.log('--- len ---', len);
            backTrack([], len, 0); //
        } 
        
        return res;
    }

    console.log(subsets([1,2,3]))
}