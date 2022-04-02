//339. Nested List Weight Sum
/*
You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists.

The depth of an integer is the number of lists that it is inside of. For example, the nested list [1,[2,2],[[3],2],1] has each integer's value set to its depth.

Return the sum of each integer in nestedList multiplied by its depth.

Example 1:

Input: nestedList = [[1,1],2,[1,1]]
Output: 10
Explanation: Four 1's at depth 2, one 2 at depth 1. 1*2 + 1*2 + 2*1 + 1*2 + 1*2 = 10.
Example 2:

Input: nestedList = [1,[4,[6]]]
Output: 27
Explanation: One 1 at depth 1, one 4 at depth 2, and one 6 at depth 3. 1*1 + 4*2 + 6*3 = 27.
*/

{
    // bfs
    var depthSum = function(nestedList) {
        let result = 0; 
        const queue = [[nestedList,1]]; 
        while(queue.length) {
            const [list, depth] = queue.pop();
            for (let element of list) {
                if (element.isInteger()) {
                    result += element.getInteger() * depth
                } else {
                    queue.push([element.getList(), depth + 1]); 
                }
            }
        }
    
        return result;
    };
}
{
    //dfs
    const dfs = (list, depth) => {
        let sum = 0;    
        for (let nested of list) {
            if (nested.isInteger()) {
                sum += nested.getInteger() * depth;
            } else {
                 sum += dfs(nested.getList(),  depth + 1);
            }
        }    
        return sum;  
    }
    var depthSum = function(nestedList) {
        return dfs(nestedList, 1);
    }
}