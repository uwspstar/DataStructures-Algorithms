{   // https://docs.google.com/document/d/e/2PACX-1vSjD4ZWAKPnLajRArSDCIcHj6WmN1T05nmudGYHeuN8Y734HRG7c5zHSjQo3XfNxciMPPXe6ArKkKJ_/pub
    const findDisappearNumbers = nums => {
        if (nums.length === 0) return 1;
        let set = new Set(nums);
        console.log(set);
        let p = 0;
        for (let i = 1; i <= nums.length; i++) {
            if (!set.has(i)) {
                nums[p] = i;
                console.log('i=', 'p=', p, 'nums[p]=', nums[p]);
                p++;
            }
        }
        return nums.slice(0, p);
    }

    console.log('findDisappearNumbers', JSON.stringify(findDisappearNumbers([4, 3, 2, 7, 8, 2, 3, 1])));
    console.log('findDisappearNumbers', JSON.stringify(findDisappearNumbers([1, 1])));
}
