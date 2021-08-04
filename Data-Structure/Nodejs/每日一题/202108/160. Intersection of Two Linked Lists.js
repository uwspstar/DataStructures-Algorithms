//160. Intersection of Two Linked Lists
/*
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:

It is guaranteed that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).

From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B. 

Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1

Output: Intersected at '2'
Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: No intersection
Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.

考虑构建两个节点指针 A, B 分别指向两链表头节点 headA, headB ，做如下操作：
指针 A 先遍历完链表 headA ，再开始遍历链表 headB ，当走到 node 时，共走步数为：
a + (b - c)
指针 B 先遍历完链表 headB ，再开始遍历链表 headA ，当走到 node 时，共走步数为：
b + (a - c)
如下式所示，此时指针 A, B 重合，并有两种情况：a + (b - c) = b + (a - c)
若两链表 有 公共尾部(即 c > 0) ：指针 A, B 同时指向「第一个公共节点」node 。
若两链表 无 公共尾部(即 c = 0) ：指针 A, B 同时指向 null 。
因此返回 A 即可。
*/

{
    //t: O(N+M) s: O(1)
    const getIntersectionNode = (headA, headB) => {
        let p1 = headA;
        let p2 = headB;
        while (p1 !== p2) {
            p1 = p1 !== null ? p1.next : headB;
            p2 = p2 !== null ? p2.next : headA;
        }
        return p1;
    };

}
{

    var getIntersectionNode = function (headA, headB) {
        let pA = headA;
        let pB = headB;
        while (pA !== pB) {
            pA = pA === null ? headB : pA.next;
            pB = pB === null ? headA : pB.next;
        }
        return pA;
        // Note: In the case lists do not intersect, the pointers for A and B
        // will still line up in the 2nd iteration, just that here won't be
        // a common node down the list and both will reach their respective ends
        // at the same time. So pA will be NULL in that case.
    };
    //Minimum Index Sum of Two Lists
}
{
    //brute force : hash set t: O(N) s: O(N) : 
    //fast than the without using Set, because loop A and B only once, the previous one loop P1 loop A and B, also P2 loop A and B
    
    var getIntersectionNode = function (headA, headB) {
        let nodesInB = new Set();

        while (headB !== null) {
            nodesInB.add(headB);
            headB = headB.next;
        }
        //console.log(nodesInB);
        while (headA !== null) {
            // if we find the node pointed to by headA,
            // in our set containing nodes of B, then return the node
            if (nodesInB.has(headA)) {
                return headA;
            }
            headA = headA.next;
        }

        return null;
    };
    //Minimum Index Sum of Two Lists
}
{
    //brute force O(N^2)
    var getIntersectionNode = function (headA, headB) {
        while (headA !== null) {
            let pB = headB;
            while (pB !== null) {
                if (headA === pB) return headA;
                pB = pB.next;
            }
            headA = headA.next;
        }
        return null;
    };
    //Minimum Index Sum of Two Lists
}