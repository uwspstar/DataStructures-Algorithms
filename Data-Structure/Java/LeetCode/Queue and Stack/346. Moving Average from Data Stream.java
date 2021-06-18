//346. Moving Average from Data Stream
/*
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Implement the MovingAverage class:

MovingAverage(int size) Initializes the object with the size of the window size.
double next(int val) Returns the moving average of the last size values of the stream.

Input
["MovingAverage", "next", "next", "next", "next"]
[[3], [1], [10], [3], [5]]
Output
[null, 1.0, 5.5, 4.66667, 6.0]

Explanation
MovingAverage movingAverage = new MovingAverage(3);
movingAverage.next(1); // return 1.0 = 1 / 1
movingAverage.next(10); // return 5.5 = (1 + 10) / 2
movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3

// PRE Sum ???, but we have window size
*/
//O(1), O(N)
class MovingAverage {
    int size, windowSum = 0, count = 0;
    Deque queue = new ArrayDeque<Integer>();

    public MovingAverage(int size) {
        this.size = size;
    }

    public double next(int val) {
        ++count;
        queue.add(val);
        int tail = count > size ? (int) queue.poll() : 0;

        windowSum = windowSum - tail + val;

        return windowSum * 1.0 / Math.min(size, count);
    }
}

//O(N), O(N)
class MovingAverageQueue {
    int size;
    List queue = new ArrayList<Integer>();

    public MovingAverage(int size) {
        this.size = size;
    }

    public double next(int val) {
        queue.add(val);

        int windowSum = 0;
        int i = Math.max(0, queue.size() - size);
        for (; i < queue.size(); ++i) {
            windowSum += (int) queue.get(i);
        }

        return windowSum * 1.0 / Math.min(queue.size(), size);
    }
}
