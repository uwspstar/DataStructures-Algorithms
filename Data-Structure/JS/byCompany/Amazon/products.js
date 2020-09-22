/*
You are given an array of integers. Return an array of the same size where the element at each index is the product of all the elements in the original array except for the element at that index.

For example, an input of [1, 2, 3, 4, 5] should return [120, 60, 40, 30, 24].

If division was allowed, the problem would be quite simple. We just calculate the product of all the elements in the array first, and then do a second pass where we divide the total product by the current element.

Without the use of division, it is easy to find a solution by realizing that the element at index i is simply the product of all the numbers before i, and all the numbers after i. To do this efficiently, we will generate a list of these "prefix" products, and "suffix" products for each element. Then, the output at each index is simply the prefix and suffix products of the element multiplied together.
*/

const products = (nums) => {
    if (nums.length < 2) return 0;
    let result = [];
    let total = 1;
    for (let i = 0; i < nums.length; i++) {
        total = total * nums[i]
    }
    for (let i = 0; i < nums.length; i++) {

        result.push(total / nums[i]);
    }
    return result;
}

console.log('products', products([1, 2, 3, 4, 5])); // [ 120, 60, 40, 30, 24 ]