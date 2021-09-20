//135. Candy
/*
There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.

Input: ratings = [1,0,2] Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

Input: ratings = [1,2,2] Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.
*/
{
    //分别处理。
    //左规则：当 ratings[i−1]<ratings[i] 时，ii 号学生的糖果数量将比 i - 1i−1 号孩子的糖果数量多。
    //右规则：当 ratings[i]>ratings[i+1] 时，ii 号学生的糖果数量将比 i + 1i+1 号孩子的糖果数量多。

    var candy = function (arr) {
        let sum = 0;
        let left2right = Array(arr.length).fill(1);
        let right2left = Array(arr.length).fill(1);

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > arr[i - 1]) {
                left2right[i] = left2right[i - 1] + 1;
            }
        }
        for (let i = arr.length - 2; i >= 0; i--) {
            if (arr[i] > arr[i + 1]) {
                right2left[i] = right2left[i + 1] + 1;
            }
        }
        for (let i = 0; i < arr.length; i++) {
            sum += Math.max(left2right[i], right2left[i]);
        }
        return sum;
    };

    //Find the Town Judge
    //Matrix Cells in Distance Order
    //Stone Game VIII
}