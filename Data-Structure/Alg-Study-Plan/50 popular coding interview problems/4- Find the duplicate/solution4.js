// By using Floyd's cycle detection algorithm (tortoise and hare):

// Time complexity: O(n)
// Space complexity: O(1)

// fast slow two pointers, same as circle of linked list

function findDuplicate(arr) {

  let fast = 0, slow = 0;

  do {
    slow = arr[slow];
    fast = arr[arr[fast]];
  } while (slow !== fast);

  slow = 0;

  while (slow !== fast) {
    slow = arr[slow];
    fast = arr[fast];
  }
  return slow;
}


console.log(findDuplicate([5, 6, 4, 2, 1, 6, 3]));

