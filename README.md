# DataStructures-Algorithms
- https://www.youtube.com/watch?v=v4cd1O4zkGw&list=PLX6IKgS15Ue02WDPRCmYKuZicQHit9kFt
### Objects vs. Maps

- Object is similar to Map—both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. For this reason (and because there were no built-in alternatives), ```Objects have been used as Maps historically```
- However, there are important differences that make Map preferable in certain cases:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
- The ```Map``` object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

### Set (Uniqu value) 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

### JavaScript Bitwise Operators
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND
- https://www.w3schools.com/jsref/jsref_operators.asp
- https://www.youtube.com/watch?v=mesu75PTDC8
- user permission
- https://www.youtube.com/watch?v=RRyxCmLX_ag

```
AND &
OR |
XOR ^
NOT ~
shift left <<
shift right >>
```


### bigO (Best Case, Average Case, Worst Case)
- speed
- space
- https://adrianmejia.com/how-you-can-change-the-world-learning-data-structures-algorithms-free-online-course-tutorial/
  ```
  constant    # Ο(1)
  logarithmic # Ο(log n)
  linear      # Ο(n)
  n log n .   # Ο(n log n)
  quadratic   # Ο(n2)
  cubic       # Ο(n3)
  polynomial  #	nΟ(1)
  exponential # Ο(n^2)
  ```
### list 
### array (list in Python3)
  ```
    - 1. Two Sum
    - 2. Maximum Subarray
    - 3. Move Zeroes
    - 4. Contains Duplicate
    - 5. Longest Word
  ```
### When and where is a static Array Used ?
    - 1) storing and accessing sequential data
    - 2) Temporarily storing objects
    - 3) Used by IO routines as buffers
    - 4) Lookup tables and inverse lookup tables
    - 5) can be used to return multiple values from a function
    - 6) Used in dynamic programming to cache answers to
    
### tuple
### set
### hash table
### dictory
### stack ```(LIFO) , caculater, Match parentheses stack, computer command```
  - push() 
  - pop()
  - peek()
  - isEmpty()
  ```
  infix notations are first converted into either postfix or prefix notations and then computed.
  - https://www.tutorialspoint.com/data_structures_algorithms/expression_parsing.htm
  ```
### when you use stack 
    - used by undo mechanisms in text editors
    - used in comiler syntax checking for matching brackets and braces
    - can be used to model a pile of books or plates.
    - used behind the scenes to support recursion by keep track of previous function calls.
    - can be used to d a Depth First Search (DFS) on a graph
###  queue ```(FIFO)```
###  node (data , next)
   ```python3
   # python3
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
   ```javascript
   // javascript
   class Node {
    constructor (data, next = null) {
      this.data = data;
      this.next = null;
    }
   }
   ```
###  linked list```(can be visualized as a chain of nodes, where every node points to the next node.)```
  ```javascript
  // javascript
  class LinkedList {
    constructor() {
      this.head = null;
    }
    insert(data) { 
      this.head = new Node(data, th;is.head);
    }
  }
  ```
https://www.freecodecamp.org/news/python-interview-question-guide-how-to-code-a-linked-list-fd77cbbd367d/
  - Simple Linked List (link, next)
  - Doubly Linked List (link, next, prev)
  - Circular Linked List
### when you use linked lists?  
  - used in many List, Queue, Stack implementations
  - Great for creating circular lists
  - Can easily model real world objects such as trains.
  - used in separate chining which is persnet certain hashtable implementations to deal with hashing collisions.
  - ofter used in the implementation of adjacency lists for graphs
  
###  tree
  ```
  A data structure that consists of nodes in a parent / child relationship
  Lists - linear but Trees - nonlinear
  Root - The top node in a tree.
  Child - A node directly connected to another node when moving away from the Root.
  Parent - The converse notion of a child.
  Siblings -A group of nodes with the same parent.
  Leaf - A node with no children.
  Edge - The connection between one node and another.
  ```
### Tree example
  ```
  - HTML DOM
  - Network Routing
  - Abstract Syntax Tree
  - Artificial Intelligence
  - Folders in Operating Systems
  - Computer File Systems
  ```
### Trees
### Binary Trees
### Binary Search Trees
  ```
  Every parent node has at most two children
  Every node to the left of a parent node is always less than the parent
  
  class BinarySearchTree {
    constructor(){
        this.root = null;
    }
  }
  
  class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
  }
  ```
### Trees vs Binary Trees vs Binary Search Trees
  ```
  Trees are non-linear data structures that contain a root and child nodes
  Binary Trees can have values of any type, but at most two children for each parent
  Binary Search Trees are a more specific version of binary trees 
  where every node to the left of a parent is less than it's value and every node to the right is greater
  
  We can search through Trees using BFS and DFS
  ```
### BFS
### DFS
### graph
  ```
  Vertex - a node
  Edge - connection between nodes
  Weighted/Unweighted - values assigned to distances between vertices
  Directed/Undirected - directions assigned to distanced between vertices
  ```
  ```
  class Graph {
    constructor(){
        this.adjacencyList = {}
    }
  }
  ```
### GRAPH TRAVERSAL USES
  ```  
  Peer to peer networking
  Web crawlers
  Finding "closest" matches/recommendations
  Shortest path problems
  GPS Navigation
  Solving mazes
  AI (shortest path to win the game)
  ```
### greedy
  ```
  * Most networking algorithms use the greedy approach
  generally greedy algorithms do not provide globally optimized solutions.
  ```
### divide and conquer (Divide/Break, Conquer/Solve, Merge/Combine)
  ```
  *** based on divide-and-conquer 
  Merge Sort
  Quick Sort
  Binary Search
  ```
### dynamic programming 
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

### Dynamic Programming
- recursion
- store (```memoize```) // NOT (```memorize```)
  ```
  In computing, memoization or memoisation is an optimization technique 
  used primarily to speed up computer programs b
  y storing the results of expensive function calls 
  and returning the cached result when the same inputs occur again
  ```
  https://www.python-course.eu/python3_memoization.php
- bottom-up

### typic computer problems
  - Fibonacci number series
  - Knapsack problem
  - Tower of Hanoi
  - All pair shortest path by Floyd-Warshall
  - Shortest path by Dijkstra
  - Project scheduling
 
### others
- A parity bit, or check bit
https://en.wikipedia.org/wiki/Parity_bit
```
There is a limitation to parity schemes. 
A parity bit is only guaranteed to detect an odd number of bit errors. 
If an even number of bits have errors, the parity bit records the correct number of ones, 
even though the data is corrupt.
```
- XOR . (both different show "1" )
- console.log vs console.dir
  ```
  log only prints out a toString representation, whereas dir prints out a navigable tree.
  ```
### online resource
- https://visualgo.net/en
- https://www.cs.usfca.edu/~galles/visualization/Algorithms.html
- https://www.tutorialspoint.com/data_structures_algorithms/index.htm
- https://www.techiedelight.com/list-of-problems/
- Data Structures Easy to Advanced - Full Tutorial Course by freeCodeCamp.org
https://www.youtube.com/watch?v=RBSGKlAvoiM&feature=em-uploademail
- 500+ Data Structures and Algorithms Interview Questions & Practice Problems by Coding Freak
https://blog.usejournal.com/500-data-structures-and-algorithms-practice-problems-35afe8a1e222

### book
- Elements of Programming Interviews in Python: The Insiders' Guide
https://www.amazon.com/Elements-Programming-Interviews-Python-Insiders/dp/1537713949/
- Cracking the Coding Interview: 189 Programming Questions and Solutions
https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850

### coding tool
- https://repl.it/@uwspstar/python
- https://repl.it/@uwspstar/fullstack
- https://repl.it/@uwspstar/BeforeGotoInterview

