堆栈（Stack）是一种后进先出（LIFO，Last In First Out）的数据结构。堆栈中的元素只能从一端（称为“栈顶”）插入和删除。这种结构非常适合处理逆序数据、递归调用、表达式求值等场景。

### 堆栈的操作和实现

堆栈的基本操作包括：
- **入栈（Push）**：将元素添加到堆栈的顶端。
- **出栈（Pop）**：从堆栈的顶端移除元素。
- **查看栈顶元素（Peek）**：返回堆栈顶端的元素，但不删除它。
- **检查堆栈是否为空（isEmpty）**：检查堆栈是否为空。

### 时间复杂度
- **入栈（Push）**：`O(1)` - 因为操作只涉及到栈顶。
- **出栈（Pop）**：`O(1)` - 因为操作只涉及到栈顶。
- **查看栈顶元素（Peek）**：`O(1)` - 因为操作只涉及到栈顶。
- **检查堆栈是否为空（isEmpty）**：`O(1)` - 这是一个简单的检查操作。

### 使用Python实现堆栈
在Python中，我们可以使用列表（list）来实现堆栈。以下是一个示例实现：

```python
class Stack:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return len(self.items) == 0

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if self.isEmpty():
            raise IndexError("Pop from an empty stack")
        return self.items.pop()

    def peek(self):
        if self.isEmpty():
            raise IndexError("Peek from an empty stack")
        return self.items[-1]

    def size(self):
        return len(self.items)

    def __str__(self):
        return str(self.items)

# 测试堆栈
stack = Stack()
print("Stack is empty:", stack.isEmpty())
stack.push(1)
stack.push(2)
stack.push(3)
print("Stack after pushing 1, 2, 3:", stack)
print("Stack size:", stack.size())
print("Top element (peek):", stack.peek())
print("Pop element:", stack.pop())
print("Stack after pop:", stack)
print("Stack is empty:", stack.isEmpty())
```

### 详细过程解释

1. **初始化**：
   - `__init__`方法创建一个空列表`self.items`来存储堆栈元素。

2. **检查堆栈是否为空**：
   - `isEmpty`方法返回`self.items`的长度是否为0。

3. **入栈操作**：
   - `push`方法使用`append`将元素添加到列表末尾（栈顶）。

4. **出栈操作**：
   - `pop`方法检查堆栈是否为空，如果为空则抛出异常，否则使用`pop`从列表末尾（栈顶）移除并返回元素。

5. **查看栈顶元素**：
   - `peek`方法检查堆栈是否为空，如果为空则抛出异常，否则返回列表末尾（栈顶）的元素。

6. **获取堆栈大小**：
   - `size`方法返回`self.items`的长度。

### 复杂度分析

- **时间复杂度**：
  - **入栈**：`O(1)` - 因为添加元素到列表末尾是常数时间操作。
  - **出栈**：`O(1)` - 因为从列表末尾移除元素是常数时间操作。
  - **查看栈顶元素**：`O(1)` - 因为访问列表末尾的元素是常数时间操作。
  - **检查是否为空**：`O(1)` - 因为只需要检查列表长度。

- **空间复杂度**：
  - **堆栈的空间复杂度为**：`O(n)` - 其中`n`是堆栈中元素的数量。

### 示例应用

1. **表达式求值**：堆栈可以用于逆波兰表示法（RPN）的表达式求值。
2. **括号匹配**：检查表达式中的括号是否成对匹配。
3. **函数调用管理**：递归调用中，堆栈用于存储函数调用信息。

### 括号匹配示例

以下是一个使用堆栈实现的括号匹配算法：

```python
def is_balanced(expression: str) -> bool:
    stack = Stack()
    pairs = {')': '(', '}': '{', ']': '['}

    for char in expression:
        if char in pairs.values():
            stack.push(char)
        elif char in pairs.keys():
            if stack.isEmpty() or stack.pop() != pairs[char]:
                return False

    return stack.isEmpty()

# 测试括号匹配
print(is_balanced("(){}[]"))  # 输出：True
print(is_balanced("([{}])"))  # 输出：True
print(is_balanced("(]"))      # 输出：False
print(is_balanced("({[)]"))   # 输出：False
```

### 过程解释

1. **初始化堆栈**：创建一个空堆栈`stack`用于存储未匹配的左括号。
2. **遍历表达式**：
   - 遇到左括号时，将其入栈。
   - 遇到右括号时，检查堆栈是否为空或栈顶元素是否与当前右括号匹配。
3. **返回结果**：遍历结束后，检查堆栈是否为空。如果为空，表示括号匹配；否则，表示括号不匹配。

通过以上内容，你可以更好地理解堆栈的实现、操作和应用场景。如果有其他问题或需要进一步的解释，请随时告诉我。
