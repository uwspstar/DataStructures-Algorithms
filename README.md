# DataStructures-Algorithms

### Basic key words
- bigO (Best Case, Average Case, Worst Case)
  - speed
  - space
  ```
  constant    # Ο(1)
  logarithmic # Ο(log n)
  linear      # Ο(n)
  n log n .   # Ο(n log n)
  quadratic   # Ο(n2)
  cubic       # Ο(n3)
  polynomial  #	nΟ(1)
  exponential # 2Ο(n)
  ```
- list 
- array
- tuple
- set
- hash table
- dictory
- stack ```(LIFO) , caculater, Match parentheses stack, computer command```
  - push() 
  - pop()
  - peek()
  - isEmpty()
- queue ```(FIFO)```
- node (data , next)
   ```
   class daynames:
      def __init__(self, data=None):
          self.data = data
          self.next = None

      e1 = daynames('Mon')
      e2 = daynames('Tue')
      e3 = daynames('Wed')

      e1.next = e3
      e3.next = e2
      
    def print_list(node):
    while node:
        print node,
        node = node.next
    print
   ```
- linked list```(can be visualized as a chain of nodes, where every node points to the next node.)```
  - Simple Linked List (link, next)
  - Doubly Linked List (link, next, prev)
  - Circular Linked List
- tree
- graph
- greedy
  ```
  * Most networking algorithms use the greedy approach
  generally greedy algorithms do not provide globally optimized solutions.
  ```
- divide and conquer (Divide/Break, Conquer/Solve, Merge/Combine)
  ```
  *** based on divide-and-conquer 
  Merge Sort
  Quick Sort
  Binary Search
  ```
- dynamic programming 
  ```
  In contrast to greedy algorithms, where local optimization is addressed, dynamic algorithms 
  are motivated for an overall optimization of the problem.

  In contrast to divide and conquer algorithms, 
  where solutions are combined to achieve an overall solution,
  dynamic  algorithms use the output of a smaller sub-problem and 
  then try to optimize a bigger sub-problem. 
  Dynamic algorithms use Memoization to remember the output of already solved sub-problems.
  ```
- Traversing
- Searching
- Insertion
- Deletion
- Sorting
- Merging

### Basic Operations of the list
- Insertion − Adds an element at the beginning of the list.
- Deletion − Deletes an element at the beginning of the list.
- Display − Displays the complete list.
- Search − Searches an element using the given key.
- Delete − Deletes an element using the given key.
- Insert Last − Adds an element at the end of the list.
- Delete Last − Deletes an element from the end of the list.
- Insert After − Adds an element after an item of the list.

### sort
- merge sort
- bobble sort

### search
- DFS
- BFS

### typic computer problems
  - Fibonacci number series
  - Knapsack problem
  - Tower of Hanoi
  - All pair shortest path by Floyd-Warshall
  - Shortest path by Dijkstra
  - Project scheduling
### online resource
- https://visualgo.net/en
- https://www.cs.usfca.edu/~galles/visualization/Algorithms.html
- https://www.tutorialspoint.com/data_structures_algorithms/index.htm

### book
- Elements of Programming Interviews in Python: The Insiders' Guide
https://www.amazon.com/Elements-Programming-Interviews-Python-Insiders/dp/1537713949/
- Cracking the Coding Interview: 189 Programming Questions and Solutions
https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850

### coding tool
- https://repl.it/@uwspstar/python
- https://repl.it/@uwspstar/fullstack

