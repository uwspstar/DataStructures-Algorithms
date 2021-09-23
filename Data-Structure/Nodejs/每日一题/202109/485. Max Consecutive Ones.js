//485. Max Consecutive Ones
{
    const findMaxConsecutiveOnes = nums => {
        let res = 0;
        let count = 0;
        for (let num of nums) {
            if (num === 1) {
                count++;
                res = Math.max(res, count);
            } else { 
                count = 0;
            }
        }
        return res;
    }
}