//Given a linked list of integers, remove all consecutive nodes that sum up to 0.
/*
Input: 10 -> 5 -> -3 -> -3 -> 1 -> 4 -> -4 Output: 10
The consecutive nodes 5 -> -3 -> -3 -> 1 sums up to 0 so that sequence should be removed. 4 -> -4 also sums up to 0 too so that sequence should also be removed.
*/
/*
1) with a 2 pointer approach where both start and end pointers begin at the first element, and then the end pointer goes to the end of the list until it finds a sum of 0. If no sum of 0 is found, then the start pointer goes to the next node in the linked list and repeats the process. If a sum of 0 is found, then the start node can remove the items in the list by setting next to the end's next, which removes all the nodes in between.

The time complexity of this problem is O(n^2), since we have 2 while loops that iterate through all n items in the list.

The space complexity is O(1), as no extra space is used.
*/

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class LinkedList {
  constructor(val) {
    this.head = new Node(val);
  }

  append(val) {
    // always check this
    if (this.head === null) return this.head = new Node(val);

    let current = this.head;
    while (current.next) { // NOT while (current)
      current = current.next;
    }
    current.next = new Node(val);

    return this;
  }
  removeConsecutiveSumTo0() {
    if (this.head === null) return null;

    let slow = this.head;
    let fast = this.head;
    let result = slow;

    while (slow) {
      fast = slow.next;
      let sum = 0;
      while (fast) {
        sum += fast.value;
        if (sum === 0) {
          slow.next = fast.next;
          sum = 0;
        }
        fast = fast.next;

      }
      slow = slow.next;
    }
    return result;
  }

}
let list = new LinkedList(10);
list.append(6);
list.append(5);
list.append(-3);
list.append(-3);
list.append(1);
list.append(4);
list.append(-4);
list.append(0);
list.append(-100);
console.log('list', JSON.stringify(list));
console.log('removeConsecutiveSumTo0', JSON.stringify(list.removeConsecutiveSumTo0()));