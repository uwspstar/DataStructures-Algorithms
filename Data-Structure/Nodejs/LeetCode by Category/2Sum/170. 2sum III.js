/*
170. Two Sum III - Data structure design

TwoSum() Initializes the TwoSum object, with an empty array initially.

void add(int number) Adds number to the data structure.

boolean find(int value) Returns true if there exists any pair of numbers whose sum is equal to value, otherwise, it returns false

Input
["TwoSum", "add", "add", "add", "find", "find"]
[[], [1], [3], [5], [4], [7]]
Output
[null, null, null, null, true, false]
*/

// before start to code :
// ask trade off add / find which one used more
// same num need to show more than 1
{
    class TwoSum {
        constructor() {
            this.map = new Map();
        }
        //void add(int number) Adds number to the data structure.
        add(num) {
            this.map.set(num, this.map.has(num) ? this.map.get(num) + 1 : 1); // 1 not 0;
        }
        //boolean find(int value) Returns true if there exists any pair of numbers whose sum is equal to value, otherwise, it returns false.
        find(target) {

            for (let key of this.map.keys()) {
                if (this.map.has(target - key)) {
                    if (target - key !== key)
                        return true;
                    if (this.map.get(key) > 1) // same num need to show more than 1
                        return true;
                }
            }

            return false;

        }
    }
}