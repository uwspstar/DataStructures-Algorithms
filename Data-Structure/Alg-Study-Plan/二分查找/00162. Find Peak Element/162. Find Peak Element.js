//162. Find Peak Element
var findPeakElement = function (arr, left = 0, right = arr.length - 1) {
    if (left >= right) return left;

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < arr[mid + 1])
        return findPeakElement(arr, mid + 1, right);
    else
        return findPeakElement(arr, left, mid);

};