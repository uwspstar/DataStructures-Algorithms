/*
Removing a Node - 0 childrenSteps - Iteratively

Find the parent of the node that needs to be removed and the node that needs to be removed
If the value we are removing is greater than the parent node
Set the right property of the parent to be null
If the value we are removing is less than the parent node​
Set the left property of the parent to be null
Otherwise, the node we are removing has to be the root, so set the root to be null

 
Removing a Node - 1 child

Find the parent of the node that needs to be removed and the node that needs to be removed
See if the child of the node to be removed is on the right side or the left side
If the value we are removing is greater than the parent node​​
Set the right property of the parent to be the child
If the value we are removing is less than the parent node​
Set the left property of the parent to be the child
Otherwise, set the root property of the tree to be the child


Removing a Node - 2 children

Find the parent of the node that needs to be removed and the node that needs to be removed
Find the predecessor node and store that in a variable
Set the left property of the predecessor node to be the left property of the node that is being removed
If the value we are removing is greater than the parent node​​
Set the right property of the parent to be the right property of the node to be removed
If the value we are removing is less than the parent node​
Set the left property of the parent to be the right property of the node to be removed
Otherwise, set the root of the tree to be the right property of the node to be removed



*/
