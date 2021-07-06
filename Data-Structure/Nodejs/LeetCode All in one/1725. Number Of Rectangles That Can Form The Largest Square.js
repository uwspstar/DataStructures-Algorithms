//1725. Number Of Rectangles That Can Form The Largest Square
/*
You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.

You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi. For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.

Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.

Return the number of rectangles that can make a square with a side length of maxLen.

Example 1:
Input: rectangles = [[5,8],[3,9],[5,12],[16,5]] Output: 3
Explanation: The largest squares you can get from each rectangle are of lengths [5,3,5,5].
The largest possible square is of length 5, and you can get it out of 3 rectangles.

Example 2:
Input: rectangles = [[2,3],[3,7],[4,3],[3,7]] Output: 3
*/
{
    //O(N)
    var countGoodRectangles = function (arr) {
        if (arr.length === 1) return 1;
        let max = 0;
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            let s = Math.min(...arr[i]);
            if (s > max) {
                max = s;
                count = 1;
            } else if (s === max) {
                count++;
            }
        }
        return count;
    };
    //Max Area of Island
    //Meeting Scheduler
    //Divide Array in Sets of K Consecutive Numbers
}