/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/19669632#overview
*/
// area = height x width
// height = min (a, b)
// width = bi - ai

// two pointers
//bruit force  time : O(n^2) space : O(1)
const maxWaterContainer1 = (arr) => {
    if (arr.length < 2) return 0;
    if (arr.length === 2) return Math.min(arr[0], arr[1]);
    let maxArea = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let height = Math.min(arr[i], arr[j]);
            let width = j - i;
            let area = height * width;
            maxArea = Math.max(maxArea, area);
        }
    }
    return maxArea;
};

// O(N) 
const maxWaterContainer = arr => {
    if (arr.length < 2) return 0;
    if (arr.length === 2) return Math.min(arr[0], arr[1]);
    let maxArea = 0;
    let p1 = 0;
    let p2 = arr.length - 1;
    while (p1 < p2) {
        let height = Math.min(arr[p1], arr[p2]);
        let width = p2 - p1;
        let area = height * width;
        maxArea = Math.max(maxArea, area);
        arr[p1] > arr[p2]
            ? p1++
            : p2--;
    }
    return maxArea;
}
console.log('1: maxArea = ', maxWaterContainer([7])) //0
console.log('2: maxArea = ', maxWaterContainer([7, 1])) // 1
console.log('3: maxArea = ', maxWaterContainer([7, 1, 2, 3, 9])) //