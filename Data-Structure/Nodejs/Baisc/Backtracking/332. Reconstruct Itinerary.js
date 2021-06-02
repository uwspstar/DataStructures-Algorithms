//332. Reconstruct Itinerary
/*
You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

Example 1:
Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
Output: ["JFK","MUC","LHR","SFO","SJC"]

Example 2:
Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.
*/
{
    var findItinerary = function (tickets) {
        let result = ['JFK']
        let map = {}

        for (const tickt of tickets) {
            const [from, to] = tickt
            if (!map[from]) {
                map[from] = []
            }
            map[from].push(to)
        }

        for (const city in map) {
            // 对到达城市列表排序
            map[city].sort()
        }
        function backTracing() {
            if (result.length === tickets.length + 1) {
                return true
            }
            if (!map[result[result.length - 1]] || !map[result[result.length - 1]].length) {
                return false
            }
            for (let i = 0; i < map[result[result.length - 1]].length; i++) {
                let city = map[result[result.length - 1]][i]
                // 删除已走过航线，防止死循环
                map[result[result.length - 1]].splice(i, 1)
                result.push(city)
                if (backTracing()) {
                    return true
                }
                result.pop()
                map[result[result.length - 1]].splice(i, 0, city)
            }
        }
        backTracing()
        return result
    };
}
//Contain Virus
//Minimize Malware Spread II
//Binary Tree Coloring Game