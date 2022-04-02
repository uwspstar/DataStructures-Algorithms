//374. Guess Number Higher or Lower
/*
We are playing the Guess Game. The game is as follows:
I pick a number from 1 to n. You have to guess which number I picked.
Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns 3 possible results:

-1: The number I picked is lower than your guess (i.e. pick < num).
1: The number I picked is higher than your guess (i.e. pick > num).
0: The number I picked is equal to your guess (i.e. pick == num).
Return the number that I picked.

Input: n = 10, pick = 6 Output: 6
*/
{
    const guessNumber = n => {
        let left = 1;
        let right = n;
        let res = -1;

        while (left <= right) {
            let mid = parseInt(left + (right - left) / 2);
            let pick = guess(mid);
            if (pick === 0) {
                res = mid;
                break;
            }
            if (pick > 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return res;
    }
}