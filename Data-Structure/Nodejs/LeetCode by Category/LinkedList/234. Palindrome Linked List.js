//234. Palindrome Linked List
/*
Given the head of a singly linked list, return true if it is a palindrome.
Input: head = [1,2,2,1] Output: true
Input: head = [1,2] Output: false
*/
//1.Copy into Array List and then Use Two Pointer Technique
//2.reverse LinkedList,compare two LinkedList
//3. reverse seconde half to compare
{
    var isPalindrome = function (head) {
        let arr = [];
        let currentNode = head;
        while (currentNode) {
            arr.push(currentNode.val);
            currentNode = currentNode.next;
        }
        let left = 0;
        let right = arr.length - 1;
        while (left < right) {
            if (arr[left] !== arr[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };
}
//Swap Nodes in Pairs
//Long Pressed Name
//Rotating the Box