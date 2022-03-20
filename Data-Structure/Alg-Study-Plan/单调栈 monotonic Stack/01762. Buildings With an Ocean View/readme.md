Algorithm

Iterate over the array of building heights from right to left.
For each current building,
While the stack is not empty, and the height of the building on top of the stack is less than the height of the current building, repeatedly pop from the stack. This will result in one of two cases:
Stack becomes empty, which means there is no greater or equal height building present to the right of the current building. Thus the view is not blocked, and we can append the current building index to the answer array.
Stack is not empty, which means there is at least one greater or equal height building. Thus the view is blocked.
Push the current building index into the stack.
Since we traversed the input array from right to left, the building indices were added to answer in reverse order. Thus, before returning answer, we must reverse the answer array so that it is in ascending order.
Return the array answer.
