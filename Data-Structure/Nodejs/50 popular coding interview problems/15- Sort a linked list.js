{
    // Bubble sort

    // Time complexity: O(n²)
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

    function sortList(list) {
        let i = list.head;
        while (i) {
            let j = list.head;
            while (j.next) {
                if (j.data > j.next.data) {
                    [j.data, j.next.data] = [j.next.data, j.data];
                }
                j = j.next;
            }
            i = i.next;
        }
    }
}
{
    // Merge sort

    // Time complexity: O(nlogn)
    // Space complexity: O(logn)

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

    function mergeSortedLists(head1, head2) {
        let ptr1 = head1;
        let ptr2 = head2;
        let returnedHead = null;
        let tail = null;
        let lower;
        while (ptr1 || ptr2) {
            if (ptr1 && ptr2) {
                if (ptr1.data < ptr2.data) {
                    lower = ptr1;
                    ptr1 = ptr1.next;
                } else {
                    lower = ptr2;
                    ptr2 = ptr2.next;
                }
            } else if (ptr1) {
                lower = ptr1;
                ptr1 = ptr1.next;
            } else {
                lower = ptr2;
                ptr2 = ptr2.next;
            }
            if (returnedHead === null) {
                returnedHead = lower;
                tail = lower;
            } else {
                tail.next = lower;
                tail = tail.next;
            }
        }
        return returnedHead;
    }

    function mergeSort(head) {
        if (head === null || head.next === null) return head;
        let slow = head;
        let fast = head;
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let headRightHalf = slow.next;
        slow.next = null;
        head = mergeSort(head);
        headRightHalf = mergeSort(headRightHalf);
        return mergeSortedLists(head, headRightHalf);
    }

    function sortList(list) {
        list.head = mergeSort(list.head);
    }
}