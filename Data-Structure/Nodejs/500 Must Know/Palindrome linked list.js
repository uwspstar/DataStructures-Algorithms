/*
Given a linked list of integers list, create a boolean function that checks if it's a palindrome linked list in constant space complexity.

Input: list = 1 -> 4 -> 6 -> 5 -> 6 -> 4 -> 1 -> null Output: true
Input: list = 8 -> 3 -> 1 -> 8 -> null Output: false
Input: list = 6 -> null Output: true
*/
//brute force : save val to arr, check arr is palindrome O(N) /O(N)
//find middle, reverse second half, and compare first half and second half O(N) /O(1)
{
    const reverseList = head => {
        if (head === null) return head;
        let curr = head;
        let pre = null;
        let next = null;
        while (curr) {
            next = curr.next;
            curr.next = pre;
            pre = curr;
            curr = next;
        }
        head = pre;
        return head;
    }
    const isPalindromeList = head => {
        if (head === null || head.next === null) return true;
        let fast = head;
        let slow = head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow;
        }
        slow = reverseList(slow);
        fast = head;
        while (slow) {
            if (slow.val !== fast.val) return false;
            slow = slow.next;
            fast = fast.next;
        }
        return true;
    }
}
{
    // By reversing the right half then comparing:

    // Time complexity: O(n)
    // Space complexity: O(1)
    class Node {
        constructor(data, next = null) {
            this.data = data;
            this.next = next;
        }
    }

    class LinkedList {
        constructor(head = null) {
            this.head = head;
        }
    }

    function reverseList(head) {
        let previous = null;
        let current = head;
        while (current) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        return previous;
    }

    function isPalindromeList(list) {
        let slow = list.head;
        let fast = list.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        slow = reverseList(slow);
        head = list.head;
        while (slow) {
            if (slow.data != head.data) return false;
            slow = slow.next;
            head = head.next;
        }
        return true;
    }
}