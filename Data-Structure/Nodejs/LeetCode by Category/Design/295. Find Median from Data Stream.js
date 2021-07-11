//295. Find Median from Data Stream
/*
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 

Example 1:

Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
*/
{
    /**
 * initialize your data structure here.
 */
    var MedianFinder = function () {
        this.arr = [];
    };

    /** 
     * @param {number} num
     * @return {void}
     */
    MedianFinder.prototype.addNum = function (num) {
        var left = 0;
        var right = this.arr.length - 1;
        while (left <= right) {
            var mid = (right + left) >> 1;
            if (this.arr[mid] < num) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        this.arr.splice(left, 0, num);   // insert at  location trick for javascript array.
    };

    /**
     * @return {number}
     */
    MedianFinder.prototype.findMedian = function () {
        if (this.arr.length % 2 == 0) {
            var mid = this.arr.length / 2;
            return (this.arr[mid] + this.arr[mid - 1]) / 2;
        } else {
            var mid = Math.floor(this.arr.length / 2);
            return (this.arr[mid]);
        }
    };
    //Sliding Window Median
    //Finding MK Average 
}