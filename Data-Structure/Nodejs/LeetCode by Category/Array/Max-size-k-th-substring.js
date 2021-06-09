{// brute force
    const maxSubStrSizeK = (k, arr) => {
        let maxSum = 0,
            windowSum = 0;

        for (i = 0; i < arr.length - k + 1; i++) {
            windowSum = 0;
            for (j = i; j < i + k; j++) {
                windowSum += arr[j];
            }
            maxSum = Math.max(maxSum, windowSum);
        }
        return maxSum;
    }

    console.log(maxSubStrSizeK(3, [2, 1, 5, 1, 3, 2]));
    console.log(maxSubStrSizeK(2, [2, 3, 4, 1, 5]));
}
{
    const maxSubStrSizeK = (k, arr) => {
        let maxSum = 0,
            windowSum = 0,
            windowStart = 0;

        for (window_end = 0; window_end < arr.length; window_end++) {
            windowSum += arr[window_end]; // add the next element
            // slide the window, we don't need to slide if we've not hit the required window size of 'k'
            if (window_end >= k - 1) {
                maxSum = Math.max(maxSum, windowSum);
                windowSum -= arr[windowStart]; // subtract the element going out
                windowStart += 1; // slide the window ahead
            }
        }
        return maxSum;
    }

    console.log(maxSubStrSizeK(3, [2, 1, 5, 1, 3, 2])); //9
    console.log(maxSubStrSizeK(2, [2, 3, 4, 1, 5])); //7
}