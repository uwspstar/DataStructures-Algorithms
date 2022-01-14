//26. Remove Duplicates from Sorted Array
//27. Remove Element
//Remove Duplicates from Sorted List II
//Remove Duplicates From an Unsorted Linked List

/*
1) if the arr is sorted; two pointers
2) if the arr is not sorted; can I use hash map ?; can I sort it first ?
*/

/*
//26. Remove Duplicates from Sorted Array
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Input: nums = [0,0,1,1,1,2,2,3,3,4]  Output: 5, nums = [0,1,2,3,4]

//原地删除，不允许我们 new 新数组，只能在原数组上操作，然后返回一个长度 

//我们知道对于数组来说，在尾部插入、删除元素是比较高效的，时间复杂度是 O(1)，但是如果在中间或者开头插入、删除元素，就会涉及数据的搬移，时间复杂度为 O(N)，效率较低。

*/
{
    //双指针技巧 中的快慢指针
    var removeDuplicates = function (nums) {
        if (nums.length < 2) return nums.length;
        let p = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== nums[p]) {
                nums[++p] = nums[i];
            }
        }
        return p + 1;
    };
}
/*
Maximum Sum of Two Non-Overlapping Subarrays
Number of Sub-arrays With Odd Sum
Faulty Sensor
*/

/*
arr = [ 1, 1, 2, 2, 3, 3, ]
p = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[p]) {
        p++;
        swap(arr, i, j)
    } 
}
*/
{
    //双指针技巧 中的快慢指针
    //T: O(N)
    //S: O(1)
    const removeDuplicates = nums => {
        if (nums.length < 2) return nums.length;

        let slow = 0, fast = 0;

        while (fast < nums.length) {
            if (nums[fast] !== nums[slow]) {
                slow++;
                // 维护 nums[0..slow] 无重复
                nums[slow] = nums[fast];
            }
            fast++;
        }
        // 数组长度为索引 + 1
        return slow + 1;
    }
}
//扩展一下
//27. Remove Element
/*
Given an array nums and a value val, remove all instances of that value in-place and return the new length.
Input: nums = [0,1,2,2,3,0,4,2], val = 2 Output: 5, nums = [0,1,4,0,3]

*** Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/
{
    {//双指针技巧 中的快慢指针
        //T: O(N)
        //S: O(1)
        var removeElement = function (nums, val) {
            let i = 0;
            for (let j = 0; j < nums.length; j++) {
                if (nums[j] !== val) {
                    nums[i] = nums[j];
                    i++;
                }
            }
            return i;
        };
    }

    {//双指针技巧 中的快慢指针
        //T: O(N)
        //S: O(1)
        const removeElement = (nums, val) => {
            let fast = 0, slow = 0;
            while (fast < nums.length) {
                if (nums[fast] != val) {
                    nums[slow] = nums[fast];
                    slow++;
                }
                fast++;
            }
            return slow;
        }

    }
}
//简单扩展一下，如果给你一个有序链表，如何去重呢
{//力扣第 83 题
    {
        //T: O(N)
        //S: O(1)
        const deleteDuplicates = head => {
            if (head === null || head.next === null) return head;
            let slow = head, fast = head;

            while (fast !== null) {
                if (fast.val !== slow.val) {
                    // nums[slow] = nums[fast];
                    slow.next = fast;
                    // slow++;
                    slow = slow.next;
                }
                // fast++
                fast = fast.next;
            }
            // 断开与后面重复元素的连接
            slow.next = null;
            return head;
        }
    }
    {
        //recursive
        //T: O(N)
        //S: O(1)
        var deleteDuplicates = function (head) {

            // base condition
            if (head === null || head.next === null) return head;

            // 1) delete duplicate from head.next linked list
            let res = deleteDuplicates(head.next);

            // check if the head and head.next val are same
            if (head.val === head.next.val) {
                head = res;
            } else {
                head.next = res;
            }

            return head;
        };
    }
    {
        //T: O(N)
        //S: O(1)
        var deleteDuplicates = function (head) {

            if (head === null || head.next === null) return head;

            let current = head;

            while (current && current.next) {
                if (current.val === current.next.val) {
                    current.next = current.next.next;
                } else current = current.next;
            }
            return head;
        };
    }
    {
        // not recommend,  modify while to recursive
        var deleteDuplicates = function (head, curr = head) {

            if (head === null || head.next === null) return head;

            if (!curr || !curr.next) return head;

            if (curr.val === curr.next.val) {
                curr.next = curr.next.next;
            } else {
                curr = curr.next;
            }
            return deleteDuplicates(head, curr);
        };
    }
}



//扩展一下
//203. Remove Linked List Elements
{
    //203. Remove Linked List Elements
    //Input: head = [1,2,6,3,4,5,6], val = 6 Output: [1,2,3,4,5]
    // dummy head;
    {
        var removeElements = function (head, val) {

            let dummy = new ListNode(0);
            dummy.next = head;

            let prev = dummy;
            let curr = head;

            while (curr != null) {
                if (curr.val == val) {
                    prev.next = curr.next;
                }
                else {
                    prev = curr;
                }
                curr = curr.next;
            }
            return dummy.next;
        }
    };

    // recursive
    {
        // only 2 cases, 
        //1 : head.val === val, than remove head, 
        //2 : head.val !== val, then keep head, and head.next = remove the val from rest
        var removeElements = function (head, val) {
            if (head === null) return head;

            let res = removeElements(head.next, val); // a new linked list with all removed val

            if (head.val === val) {
                return res;
            } else {
                head.next = res;
                return head;
            }
        };
    }
}