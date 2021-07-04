//912. Sort an Array
/*Given an array of integers nums, sort the array in ascending order.

 

Example 1:
Input: nums = [5,2,3,1]
Output: [1,2,3,5]

Example 2:
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]

*/
{
    var sortArray = function (nums) {
        let quickSort = (arr) => {
            if (arr.length < 2) return arr;
            
            let pivot = Math.round(arr.length / 2);
            let left = arr.filter(e => e < arr[pivot]);
            let mid = arr.filter(e => e === arr[pivot]);
            let right = arr.filter(e => e > arr[pivot]);

            return [...quickSort(left), ...mid, ...quickSort(right)]
        }

        return quickSort(nums);
    }
}
{
    var sortArray = function (arr) {
        if (arr.length < 2) return arr;
        const getPivotIndex = (arr, low = 0, high = arr.length - 1) => {
            let pi = low;
            let pivot = arr[high];
            for (let i = low; i <= high; i++) {
                if (arr[i] < pivot) {
                    swap(arr, i, pi);
                    pi++;
                }
            }
            swap(arr, high, pi);
            return pi;
        }
        const quickSort = (arr, low = 0, high = arr.length - 1) => {
            if (arr.length < 2) return arr;
            if (low < high) {
                let pi = getPivotIndex(arr, low, high);
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
            return arr;
        }
        return quickSort(arr);
    };

}
{
    // use build in api
    var sortArray = function (nums) {
        return nums.sort((a, b) => a - b);
    };
    //Maximum Vacation Days
    //Minimize Max Distance to Gas Station
    //Sign of the Product of an Array
}
